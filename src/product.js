import logo from './logo.svg';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useCart} from 'react-use-cart'
import { Button } from 'bootstrap';
const Prod = (props) =>{
  const {addItem }= useCart();
  return (
<div>
    <div class="card text-center imgCard ">
            <img  src={props.img} class="card-img-top m-2 text-centers " alt=""/>
        <div className="card-body">
             <h5 className="card-title">{props.titel}</h5>
             <p className="card-text">{props.desc}</p>
             <p><b>$ {props.price} </b></p>
             <button className="btn btn-primary text-center" onClick={()=>addItem(props.item)}>Add card</button>
        </div>
    </div>  
</div>
  )
}

export default Prod;