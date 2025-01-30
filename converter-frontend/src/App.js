
import './App.css';
// import AudioConverter from './components/FileUpload';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';
// import Upload2 from './components/Upload';
import Upload from './components/Upload';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
      <Navbar />
      </header>
      <main>
      <Routes>
     
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/upload/mp3-to-flac' element={<Upload from_format={'mp3'} to_format={'flac'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/mp3-to-ogg' element={<Upload from_format={'mp3'} to_format={'ogg'}  fileType={'audio'}/>}></Route>
      <Route exact path='/upload/mp3-to-aac' element={<Upload from_format={'mp3'} to_format={'aac'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/mp3-to-wav' element={<Upload from_format={'mp3'} to_format={'wav'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/mp3-to-aiff' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route> 
      {/* <Route exact path='/upload/ogg-to-mp3' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/ogg-to-flac' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/ogg-to-aac' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/ogg-to-wav' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/ogg-to-aiff' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/flac-to-mp3' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/flac-to-ogg' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/flac-to-wav' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/flac-to-aac' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/flac-to-aiff' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/wav-to-mp3' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/wav-to-flac' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/wav-to-aac' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/wav-to-ogg' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/wav-to-aiff' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/aac-to-mp3' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/aac-to-wav' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/aac-to-flac' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/aac-to-ogg' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/aac-to-aiff' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/aiff-to-mp3' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/aiff-to-wav' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/aiff-to-flac' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/aiff-to-ogg' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
      <Route exact path='/upload/aiff-to-aac' element={<Upload from_format={'mp3'} to_format={'aiff'} fileType={'audio'}/>}></Route>
       */}

      <Route exact path='/upload/jpg-to-png' element={<Upload from_format={'jpg'} to_format={'png'} fileType={'image'}/>}></Route>
      <Route exact path='/upload/jpg-to-webp' element={<Upload from_format={'jpg'} to_format={'webp'} fileType={'image'}/>}></Route>
      <Route exact path='/upload/jpg-to-svg' element={<Upload from_format={'jpg'} to_format={'svg'} fileType={'image'}/>}></Route>
      <Route exact path='/upload/jpg-to-tiff' element={<Upload from_format={'jpg'} to_format={'tiff'} fileType={'image'}/>}></Route>
      <Route exact path='/upload/jpg-to-aiff' element={<Upload from_format={'jpg'} to_format={'aiff'} fileType={'image'}/>}></Route>
      <Route exact path='/upload/jpg-to-gif' element={<Upload from_format={'jpg'} to_format={'gif'} fileType={'image'}/>}></Route>
      {/* <Route exact path='/upload/png-to-gif' element={<Upload from_format={'png'} to_format={'gif'} fileType={'image'}/>}></Route>
      <Route exact path='/upload/bmp-to-jpg' element={<Upload from_format={'bmp'} to_format={'jpg'} fileType={'image'}/>}></Route>
      <Route exact path='/upload/webp-to-jpg' element={<Upload from_format={'webp'} to_format={'jpg'} fileType={'image'}/>}></Route>
      <Route exact path='/upload/jpg-to-bmp' element={<Upload from_format={'jpg'} to_format={'bmp'} fileType={'image'}/>}></Route> */}
      
      <Route exact path='/upload/mp4-to-webm' element={<Upload from_format={'mp4'} to_format={'webm'}/>}></Route>
      <Route exact path='/upload/mp4-to-avi' element={<Upload from_format={'mp4'} to_format={'avi'}/>}></Route>
      <Route exact path='/upload/mp4-to-mpeg' element={<Upload from_format={'mp4'} to_format={'mpeg'}/>}></Route>
      <Route exact path='/upload/mp4-to-flv' element={<Upload from_format={'mp4'} to_format={'flv'}/>}></Route>

      <Route exact path='/upload/word-to-pdf' element={<Upload from_format={'word'} to_format={'pdf'}/>}></Route>
      <Route exact path='/upload/pdf-to-word' element={<Upload from_format={'pdf'} to_format={'word'}/>}></Route>
      <Route exact path='/upload/csv-to-pdf' element={<Upload from_format={'csv'} to_format={'pdf'}/>}></Route>
      <Route exact path='/upload/csv-to-json' element={<Upload from_format={'csv'} to_format={'json'}/>}></Route>
      

      </Routes>
      </main>
      <footer>
        
      </footer>
      {/* <AudioConverter/> */}
      </Router>
    </div>
  );
}

export default App;
