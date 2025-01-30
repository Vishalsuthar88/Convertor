import React, { useState } from 'react';
import Converters from './Converters';
import Tools from './Tools';

const Home = () => {
  const [view, setView] = useState('converters');

  return (
    <div className="home">
      <div className="container py-5" >
      <img className='img-fluid' src='https://s3.amazonaws.com/cdn2.hayageek.com/wp-content/uploads/2023/11/08174610/documnerconversion.png' alt='website info' width={600} height={300}/>

      </div>
      <button className={`border border-info rounded-3 p-2 ${view==='converters'?"text-bg-primary":""}`} onClick={() => setView('converters')}>Converters</button>
      <button className={`border border-info rounded-3 p-2 ${view==='tools'?"text-bg-primary":""}`} onClick={() => setView('tools')}>Switch to Tools</button>
     

      <div className="content">
        {view === 'converters' && <Converters/>}
        {view === 'tools' && <Tools />}
      </div>
    
    </div>
  );
};

export default Home;
