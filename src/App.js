import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Client from './containers/Client'
import Clients from './containers/Clients'
import NavBar from './components/NavBar'
import Comics from './containers/Comics'
import Comic from './containers/Comic';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/clients" component={Clients}/>
          <Route path="/clients/:id" component={Client}/>
          <Route exact path="/comics" component={Comics}/>
          <Route path="/comics/:id" component={Comic}/>
      </Router>
    </div>
  );
}

export default App;
