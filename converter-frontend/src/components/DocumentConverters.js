import React from 'react';
import Cards from './Card';

const DocumentConverters = () => {
  const conversionFormats=[{ title: 'WORD to PDF', description: 'Convert WORD to PDF format', link: '/upload/word-to-pdf' },
    { title: 'PDF to WORD', description: 'Convert PDF to WORD format', link: '/upload/pdf-to-word' },
    { title: 'CSV to PDF', description: 'Convert CSV to PDF format', link: '/upload/csv-to-pdf' },
    { title: 'CSV to JSON', description: 'Convert CSV to JSON format', link: '/upload/csv-to-json' },
    // Add more formats as needed
  ];

  return (
    <div>
      <h1>Document Converter</h1>
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

export default DocumentConverters;
