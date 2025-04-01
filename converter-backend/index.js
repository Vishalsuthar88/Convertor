// built in aac - lower quality
// compiled libfdk_aac - higher quality but non free(non GPL), only for personal projects 
// or use qaac wrapper(apple's aac) - better quality than ffmpeg built in encoder 
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); //Convert audio/video formats (e.g., MP3 to FLAC, MP4 to AVI).
// const { ffmpegPath } = require('@ffmpeg-installer/ffmpeg');
const sharp = require('sharp') //Used for processing and optimizing images in Node.js.
const Jimp= require('jimp'); // jimp + potrace for jpg to svg
const  {Potrace}  = require('potrace');
const multer = require('multer'); //Handles file uploads in Node.js when users upload images, videos, or documents.
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' })); // Adjust for frontend port

app.use(express.json());
const PORT = 5001;
// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 50 * 1024 * 1024 },
})
const audioFormats = ['mp3', 'flac', 'wav', 'aac', 'ogg', 'aiff'];
const videoFormats=['webm','avi','mpeg','flv'];

// Route to handle audio upload and conversion
app.post('/convert/audio_file', upload.single('audioFile'), (req, res) => {

  const inputfilePath = req.file.path;
  const outputFormat = req.body.format;

  if (!audioFormats.includes(outputFormat)) {
    return res.status(400).send("Unsupported format. Please select a valid format.");
  }

  const outputfilePath = path.join('audio-outputs', `${req.file.filename}.${outputFormat}`);

  //ensure output directory exits
  if (!fs.existsSync('audio-outputs')) {
    fs.mkdirSync('audio-outputs');
  }
  //convert audio using ffmpeg
  ffmpeg(inputfilePath)
    // .toFormat(outputFormat)
    // .audioCodec('aac_mf')
    .on('end', () => {
      //send download link as a json response
      const downloadUrl = `http://localhost:${PORT}/download/audio_file/${req.file.filename}.${outputFormat}`;
      res.json({ downloadUrl });
      //cleanup input file after conversion completes
      fs.unlinkSync(inputfilePath);

    })
    .on('error', err => {
      console.error('Error during conversion:', err);
      res.status(500).send('Conversion failed');
      fs.unlinkSync(inputfilePath);

    })
    .save(outputfilePath);
  if (outputFormat == 'aac') {
    ffmpeg(inputfilePath)
      .audioCodec('aac_mf')
  }
  else {
    ffmpeg(inputfilePath)
      .toFormat(outputFormat)
  }
});

//route for handling download requests
app.get('/download/audio_file/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join('audio-outputs', fileName);
  //check if file exists
  if (fs.existsSync(filePath)) {
    res.download(filePath, err => {
      if (err) console.error("Error sending file:", err);
      //clean up output file after download
      fs.unlinkSync(filePath);
    });
  } else {
    res.status(404).send("File not found");
  }
});

// image conversion
app.post('/convert/image_file', upload.single('imageFile'), async (req, res) => {
  const outputFormat = req.body.format
  const inputfilePath = req.file.path

  const imageFormats = ['bmp', 'jpg', 'jpeg', 'png', 'webp', 'tiff', 'gif', 'tif', 'svg', 'avif'];
  const fileExtension = path.extname(req.file.originalname).toLowerCase().substring(1);
  if (!imageFormats.includes(fileExtension)) {
    return res.status(400).send('Unsupported file format. Please upload a valid BMP, JPG, PNG, etc.');
  }
  if (!fs.existsSync('image-outputs')) {
    fs.mkdirSync('image-outputs')
  }
  const outputfilePath = path.join('image-outputs', `${req.file.filename}.${outputFormat}`);
  try {
    if(fileExtension === 'jpg' && outputFormat === 'svg'){
      const image = await Jimp.read(inputfilePath)
      const tempPngPath = inputfilePath.replace('.jpg','.png');
      await image.writeAsync(tempPngPath);
      Potrace.trace(tempPngPath,(err, svg)=>{
        if(err){
          console.log("Error converting to SVG:",err);
          return res.status(500).send("Error converting JPG TO SVG.");
        }
        fs.writeFileSync(outputfilePath,svg);
        console.log(`SVG saved at: $${outputfilePath}`)
        const downloadUrl = `http://localhost:${PORT}/download/image_file/${req.file.filename}.${outputFormat}`;
        res.json({ downloadUrl });

        fs.unlinkSync(tempPngPath);
        fs.unlinkSync(inputfilePath);
      })
   
    }
    else{
    await sharp(inputfilePath)
      .toFormat(outputFormat)
      .toFile(outputfilePath)
    const downloadUrl = `http://localhost:${PORT}/download/image_file/${req.file.filename}.${outputFormat}`;

    res.json({ downloadUrl })

    fs.unlink(inputfilePath, (err) => {
      if (err) console.error('Error deleting input file:', err);
    });
  }

  } catch (err) {
    console.log(err);
    res.status(500).send("Error converting file.");
    // fs.unlinkSync(inputfilePath)
  }


});

app.get('/download/image_file/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join('image-outputs', fileName);

  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.download(filePath, (err) => {
      console.log(filePath)
      if (err) console.error('Error sending file:', err);

      // Clean up the output file after download
      // fs.unlink(filePath, (err) => {
      //   if (err) console.error('Error deleting output file:', err);
      // });
    });
  } else {
    res.status(404).send('File not found');
  }
});

app.post('/convert/video_file',upload.single('videoFile'),(req,res)=>{
    const inputfilePath = req.file.path;
    const outputFormat = req.body.format;
    if (!videoFormats.includes(outputFormat)) {
      return res.status(400).send("Unsupported format. Please select a valid format.");
    }
    const outputfilePath = path.join('video_file')
})





app.listen(5001, () => console.log('Server running on port 5001'));
