import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Card from './card';
import {CartProvider} from 'react-use-cart';
function App() {

return(
  
 
  <CartProvider>
      <Home />
     <Card />
  </CartProvider>
)


}

export default App;
