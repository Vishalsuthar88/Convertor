import React, { useState } from 'react';
// import AudioFormat from './AudioFormat';
import axios from 'axios';
const Upload = ({from_format, to_format, fileType}) => {
    const [file, setFile] = useState(null);
    const [convertedFile, setConvertedFile] = useState(null);
    const [format, setFormat] = useState('from_format');
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
      setFormat(to_format)
    };
    // const handleFormatChange = (event) => {
    //   setFormat(event.target.value);
    // };
  
    const handleUpload = async () => {
      const formData = new FormData();
      formData.append((fileType==='audio') ? 'audioFile' : 'imageFile', file);
      formData.append('format', format); // Ensure this matches one of the supported formats
      console.log(formData)
    
      try {
        const response = await axios.post(`http://localhost:5001/convert/${fileType}_file`, formData);
        const { downloadUrl } = response.data;
        setConvertedFile(downloadUrl); // Set the download URL directly
      } catch (error) {
        console.error('Error uploading or converting file', error);
      }
    };
  
  return (
    <div className='container' style={{paddingTop:'70px'}}>
        <h2>{from_format.toUpperCase()} to {to_format.toUpperCase()}</h2>
         <input type="file" accept={from_format} onChange={handleFileChange} />
      
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

export default Upload