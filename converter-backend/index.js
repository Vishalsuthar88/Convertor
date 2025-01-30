const express = require('express');
const app = express();
// const cors = require('cors');
const path = require('path');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const sharp = require('sharp')
const multer = require('multer');
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3001' })); // Adjust for frontend port

app.use(express.json());
const PORT = 5001;
// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 50 * 1024 * 1024 },
})
const supportedFormat = ['mp3', 'flac', 'wav', 'aac', 'ogg'];

// Route to handle audio upload and conversion
app.post('/convert/audio_file', upload.single('audioFile'), (req,res)=>{

  const inputfilePath = req.file.path;
  const outputFormat = req.body.format;

  if(!supportedFormat.includes(outputFormat)){
    return res.status(400).send("Unsupported format. Please select a valid format.");
  }

  const outputfilePath = path.join('audio-outputs', `${req.file.filename}.${outputFormat}`);

  //ensure output directory exits
  if(!fs.existsSync('audio-outputs')) {
    fs.mkdirSync('audio-outputs');
  }
  //convert audio using ffmpeg
  ffmpeg(inputfilePath)
    .toFormat(outputFormat)
    .on('end', () =>{
      //send download link as a json response
      const downloadUrl=`http://localhost:${PORT}/download/audio_file/${req.file.filename}.${outputFormat}`;
      res.json({downloadUrl});
      //cleanup input file after conversion completes
        fs.unlinkSync(inputfilePath);
      
    })
    .on('error', err =>{
      console.error('Error during conversion:', err);
      res.status(500).send('Conversion failed');
        fs.unlinkSync(inputfilePath);
      
    })
    .save(outputfilePath);
});

//route for handling download requests
app.get('/download/audio_file/:filename', (req,res) =>{
  const fileName = req.params.filename;
  const filePath = path.join('audio-outputs', fileName);
  //check if file exists
  if(fs.existsSync(filePath)){
    res.download(filePath, err =>{
      if(err) console.error("Error sending file:", err);
      //clean up output file after download
      fs.unlinkSync(filePath);
    });
  } else{
    res.status(404).send("File not found");
  }
});

// image conversion
app.post('/convert/image_file', upload.single('imageFile'), async (req,res)=>{
  const outputFormat= req.body.format
  const inputfilePath= req.file.path 
  
  const supportedFormats = ['bmp', 'jpg', 'jpeg', 'png', 'webp', 'tiff', 'gif'];
  const fileExtension = path.extname(req.file.originalname).toLowerCase().substring(1);
  if (!supportedFormats.includes(fileExtension)) {
    return res.status(400).send('Unsupported file format. Please upload a valid BMP, JPG, PNG, etc.');
  }
  if(!fs.existsSync('image-outputs')){
    fs.mkdirSync('image-outputs')
  }
  const outputfilePath = path.join('image-outputs', `${req.file.filename}.${outputFormat}`);
  try{

    await sharp(inputfilePath)
            .toFormat(outputFormat)
            .toFile(outputfilePath)
                const downloadUrl=`http://localhost:${PORT}/download/image_file/${req.file.filename}.${outputFormat}`;
               
                  res.json({downloadUrl})
                
                fs.unlink(inputfilePath, (err) => {
                  if (err) console.error('Error deleting input file:', err);
                });
          
  } catch(err){
    console.log(err);
    res.status(500).send("Error converting file.");
    // fs.unlinkSync(inputfilePath)
  }

});

app.get('/download/image_file/:filename', (req,res) =>{
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





app.listen(5001, () => console.log('Server running on port 5001'));
