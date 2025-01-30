import React from 'react';
import Cards from './Card';

const VideoConverters = () => {
  const conversionFormats=[{ title: 'MP4 to WEBM', description: 'Convert MP4 to WEBM format', link: '/upload/mp4-to-webm' },
    { title: 'MP4 to AVI', description: 'Convert MP4 to AVI format', link: '/upload/mp4-to-avi' },
    { title: 'MP4 to MPEG', description: 'Convert MP4 to MPEG format', link: '/upload/mp4-to-mpeg' },
    { title: 'MP4 to FLV', description: 'Convert MP4 to FLV format', link: '/upload/mp4-to-flv' },
    // Add more formats as needed
  ];
  return (
    <div>
      <h1>Video Converter</h1>
      <div className="card-container">
      {
        conversionFormats.map((format,index)=>(
          <Cards key ={index} 
          title={format.title}
          description={format.description}
          link={format.link} />
        ))
      }
      </div>
    </div>
  );
};

export default VideoConverters;
