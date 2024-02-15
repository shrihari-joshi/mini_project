// App.js

import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="navbar">
      <div className="search-login">
          <input type="text" placeholder="Search" />
          
        </div>
        <div className="tabs">
          <a href="#">Shri</a>
          <a href="#">Ninad</a>
          <a href="#">Atharva</a>
          <a href="#">Mayur</a>
        
        <button>Login</button>
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
