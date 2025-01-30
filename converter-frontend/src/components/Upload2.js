import React, { useState } from 'react';
// import AudioFormat from './AudioFormat';
import axios from 'axios';
const Upload2 = () => {
    const [file, setFile] = useState(null);
    const [convertedFile, setConvertedFile] = useState(null);
    const [format, setFormat] = useState('mp3');
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
    const handleFormatChange = (event) => {
      setFormat(event.target.value);
    };
  
    const handleUpload = async () => {
      const formData = new FormData();
      formData.append('audioFile', file);
      formData.append('format', format); // Ensure this matches one of the supported formats
    
      try {
        const response = await axios.post('http://localhost:5000/convert', formData);
        const { downloadUrl } = response.data;
        setConvertedFile(downloadUrl); // Set the download URL directly
      } catch (error) {
        console.error('Error uploading or converting file', error);
      }
    };
  
  return (
    <div className='container' style={{paddingTop:'70px'}}>
         <input type="file" accept=".mp3,.wav,.ogg,.aac,.flac" onChange={handleFileChange} />
      <select value={format} onChange={handleFormatChange}>
          <option value="mp3">MP3</option>
          <option value="wav">WAV</option>
          <option value="aac">AAC</option>
          <option value="ogg">OGG</option>
          <option value="flac">FLAC</option>
        </select>
      <button onClick={handleUpload} disabled={!file}>
        Convert
      </button>

      {convertedFile && (
        <div>
          <h3>Converted File:</h3>
          <a href={convertedFile} download>Download Converted File</a>

        </div>
      )}
    </div>
  )
}

export default Upload2