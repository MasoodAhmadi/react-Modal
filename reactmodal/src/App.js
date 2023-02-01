import './App.css';
// import ModalExample from './component/modal';
import Chips from './component/Tooltip';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <ModalExample /> */}
        <Chips />
      </header>
    </div>
  );
}

export default App;
