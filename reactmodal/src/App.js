import React from 'react';

import './App.css';
// import DragNDrop from './component/DragNDrop';
import ModalExample from './component/modal';
// import Chips from './component/Tooltip';
import Navigation from './component/Nav';

function App() {
  return (
    <div style={{ textAlign: '' }}>
      <Navigation />
      <header className='App-header'>
        <img className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ModalExample />
        {/* <Chips />
        <Kanban /> */}
        <div
          style={{
            backgroundColor: 'green',
            minHeight: '100vh',
            display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'center',
            // fontSize: 'calc(10px + 2vmin)',
            color: 'white',
          }}
        >
          {/* <DragNDrop /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
