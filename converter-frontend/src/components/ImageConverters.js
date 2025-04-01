// frontend/src/components/ImageConverter.js
import React from 'react';
import Cards from './Card';

const ImageConverters = () => {
  const conversionFormats=[{from:'jpg',to:'png',  description: 'Convert JPG to PNG format' },
  { from:'jpg',to:'webp', description: 'Convert JPG to WEBP format' },
  {  from:'jpg',to:'gif', description: 'Convert JPG to GIF format' },
  {  from:'jpg',to:'tiff', description: 'Convert JPG to TIFF format' },
  // {  from:'jpg',to:'iff', description: 'Convert JPG to IFF format' },
  // {  from:'jpg',to:'svg', description: 'Convert JPG to SVG format' },
  // Add more formats as needed
];

  return (
    <div className='image-convertor'>
      <h1>Image Converter</h1>
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
    </div>

  );
};

export default ImageConverters;
