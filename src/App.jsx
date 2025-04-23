import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header Header={Header} />
      <div className="main">
        <Navigation Navigation={Navigation} />
      </div>
    </div>
    
  );
}

export default App;
