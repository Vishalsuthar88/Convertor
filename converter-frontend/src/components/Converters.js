import React from 'react';
import AudioConverters from './AudioConverters';
import ImageConverters from './ImageConverters';
import VideoConverters from './VideoConverters';
import DocumentConverters from './DocumentConverters';

const Converters = () => {
  // const [selectedConverter, setSelectedConverter] = useState('audio');

  return (
    <div>
      <h2>Converters</h2>
      
      <AudioConverters />
      <ImageConverters />
      <VideoConverters />
      <DocumentConverters />

    </div>
  );
};

export default Converters;
