import logo from './logo.svg';
import './App.module.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import MainPage from "./Component/mainPage/mainPage"

import TopBar from "./Component/TopBar/Topbar"
import ProductListing from './Pages/ProductListing/ProductListing';
import Detail from './Pages/Details/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <TopBar/>
    <Switch>

<Route exact path='/' component={MainPage}/>
<Route exact path='/ProductListing/:productId' component={ProductListing}/>
<Route exact path='/DetailsPage' component={Detail}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
