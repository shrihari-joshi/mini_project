// App.js

import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="navbar">
      <div className="search-login">
          <input type="text" placeholder="Search" className='in' />
          
        </div>
        <div className="tabs">
          <a href="#" className='border act'>Shri</a>
          <a href="#" className='border act'>Ninad</a>
          <a href="#" className='border act'>Atharva</a>
          <a href="#" className='border act'>Mayur</a>
        
        <button className='in'>Login</button>
        </div>
        
      </header>

      {/* Your page content goes here */}
      <div className="content">
        <h1>Welcome to the Homepage</h1>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export default App;
