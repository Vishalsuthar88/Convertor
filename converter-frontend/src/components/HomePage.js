import React, { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState('mp3');
  const [converter, setConverter] = useState('audio');
  const [output, setOutput] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConversion = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('format', format);

    try {
      const response = await axios.post(`http://localhost:5000/convert/${converter}`, formData, {
        responseType: 'blob', // Important for file download
      });

      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', `converted.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      setOutput('File converted successfully!');
    } catch (error) {
      setOutput('Error in conversion');
    }
  };

  return (
    <div>
      <h1>File Converter</h1>

      <div>
        <h2>Select Converter Type</h2>
        <select onChange={(e) => setConverter(e.target.value)}>
          <option value="audio">Audio Converter</option>
          <option value="image">Image Converter</option>
          <option value="video">Video Converter</option>
          <option value="doc">Document Converter</option>
        </select>
      </div>

      <div>
        <h2>Upload File</h2>
        <input type="file" onChange={handleFileChange} />
      </div>

      <div>
        <h2>Select Format</h2>
        <input type="text" placeholder="e.g., flac, png, avi" onChange={(e) => setFormat(e.target.value)} />
      </div>

      <button onClick={handleConversion}>Convert</button>

      <p>{output}</p>

      <div>
        <button onClick={() => alert('Switching tools...')}>Switch to Music Effects and Other Tools</button>
      </div>
    </div>
  );
};

export default HomePage;
