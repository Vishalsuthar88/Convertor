import React from 'react'
import '../App.css';

import { Link, useLocation} from 'react-router-dom';
const Navbar = () => {
  let location = useLocation();
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
        <Link className="navbar-brand mx-2" to="/">CONVERTIO</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <Link className={`nav-link ${location.pathname==='/'?'active':""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/about'?'active':""}`} to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Image Converters
                </Link>
                <ul className="dropdown-menu">
                  <div>
                    <div><li><Link className="dropdown-item" to="/upload/jpg-to-png">JPG to PNG</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/png-to-gif">PNG to GIF</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/bmp-to-jpg">BMP to JPG</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/jpg-to-svg">JPG to SVG</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/jpg-to-gif">JPG to GIF</Link></li></div>
                  </div>

                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Audio Converters
                </Link>
                <ul className="dropdown-menu">
                <div>
                    <div><li><Link className="dropdown-item" to="/upload/mp3-to-flac">MP3 to FLAC</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/mp3-to-ogg">MP3 to OGG</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/mp3-to-aac">MP3 to AAC</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/mp3-to-wav">MP3 to WAV</Link></li></div>
                  </div>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Document Converters
                </Link>
                <ul className="dropdown-menu">
                  <div>
                    <div><li><Link className="dropdown-item" to="/upload/word-to-pdf">WORD to PDF</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/pdf-to-word">PDF to WORD</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/csv-to-pdf">CSV to PDF</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/csv-to-json">CSV to JSON</Link></li></div>
                  </div>

                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Video Converters
                </Link>
                <ul className="dropdown-menu">
                <div>
                    <div><li><Link className="dropdown-item" to="/upload/mp4-to-mpeg">MP4 to MPEG</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/mp4-to-avi">MP4 to AVI</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/mp4-to-webm">MP4 to WEBM</Link></li></div>
                    <div><li><Link className="dropdown-item" to="/upload/mp4-to-flv">MP4 to FLV</Link></li></div>
                  </div>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" onClick={handleSubmit} type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;