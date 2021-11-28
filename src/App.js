import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import About from './views/About';
import Main from './views/Main';
import Error from './views/Error';
import Products from './views/Products';
import ProductsDetails from './views/ProductsDetails';

function App() {
  return (
    <div className="App">      
      <Router>
        <Menu/>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/about' component={About}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/products/:productId' component={ProductsDetails}/>
          <Route component={Error}/>

        </Switch>        
      </Router>      
    </div>
  );
}

export default App;