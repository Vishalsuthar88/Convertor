import React from 'react';
// import AudioFormat from './AudioFormat';
import Cards from './Card';

const AudioConverters = () => {
 
  const conversionFormats=[
    { from:'mp3', to:'flac',  description: 'Convert MP3 to FLAC format' },
    { from:'mp3', to:'ogg', description: 'Convert MP3 to OGG format' },
    { from:'mp3', to:'wav', description: 'Convert MP3 to WAV format' },
    { from:'mp3', to:'aac', description: 'Convert MP3 to AAC format' },
    { from:'mp3', to:'aiff',  description: 'Convert MP3 to AIFF format' },
    // { from:'flac', to:'mp3',  description: 'Convert FLAC to MP3 format' },
    // { from:'flac', to:'ogg',  description: 'Convert FLAC to OGG format' },
    // { from:'flac', to:'aac',  description: 'Convert FLAC to AAC format' },
    // {from:'flac', to:'wav',   description: 'Convert FLAC to WAV format' },
    // { from:'flac', to:'aiff',  description: 'Convert FLAC to AIFF format'},
    // { from:'ogg', to:'mp3', description: 'Convert OGG to MP3 format' },
    // { from:'ogg', to:'flac',  description: 'Convert OGG to FLAC format'},
    // { from:'ogg', to:'wav', description: 'Convert OGG to WAV format' },
    // { from:'ogg', to:'aac', description: 'Convert OGG to AAC format' },
    // { from:'ogg', to:'aiff',  description: 'Convert OGG to AIFF format' },
    // Add more formats as needed
  ];
  

  return (
    <div>
      <h1>Audio/Music Converter</h1>
      <div className="card-container">
      {
        conversionFormats.map((format,index)=>(
          <Cards key ={index} 
          title={`${format.from.toUpperCase()} to ${format.to.toUpperCase()}`}
          description={format.description}
          link={`/upload/${format.from}-to-${format.to}`} />
        ))
      }
      </div>
     
     
      {/* <AudioFormat /> */}
    </div>
  );
};

export default AudioConverters;