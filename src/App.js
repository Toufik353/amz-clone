import logo from './logo.svg';
import './App.module.css';

import MainPage from "./Component/mainPage/mainPage"

import TopBar from "./Component/TopBar/Topbar"

function App() {
  return (
    <div className="App">
    <TopBar/>
    <MainPage/>
    </div>
  );
}

export default App;
