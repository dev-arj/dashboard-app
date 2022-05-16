import './App.css';

function App() {
  return (
    <div className="App">
      <header>DashBoard</header>
      <div className="NavBar">
        <div className='Logo'>
          <h1>DB</h1>
        </div>
        <div className="Tabs">
        <div className="Home">Home</div>
        <div className="Policy">Policy</div>
        <div className="About">About</div>
        <div className="ContactUs">Contact Us</div>
        </div>
      </div>
      <div className="Sector-2">
        <div className="SideMenu">
          <h1 className="SideMenu-Heading">SideMenu</h1>
        </div>
        <div className="PresentationWindow">
          <h1 className="PresentationWindow-Heading">PresentationWindow</h1>
        </div>
      </div>
      <footer>Copyright issued</footer>
    </div>
  );
}

export default App;
