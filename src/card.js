import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useCart} from 'react-use-cart'
const Card = ()=>{
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    }= useCart();
    if (isEmpty) return <h1 className='text-cemter'>your card is Empty</h1>
    return(
        <>
        <section className='text-center container'>
            <div className='text-right pt-5 pr-5'>
                <h1>card({totalUniqueItems}) = total items ({totalItems})</h1>
            </div>
        
        {/* <table> */}
        {/* <tbody> */}

                {items.map((item,id)=>{

                return(
                 <div className="text-center pt-3 ">
                       <tr className='d-flex justify-content-around align-items-center' key={id}>
                    <td className='tableimg p-2 mr-2'><img  src={item.img} class="card-img-top m-2 " alt=""/></td>
                    <td className='p-2 ml-2'>{item.titel}</td>
                    <td className='p-2 ml-2'>{item.price}</td>
                    <td> Quantity ({item.quantity})</td>
                    <td className='p-2 ml-2'>
                    <button  className="btn btn-primary m-1" onClick={()=>updateItemQuantity(item.id , item.quantity -1)}>-</button>
                    <button  className="btn btn-primary m-1" onClick={()=>updateItemQuantity(item.id , item.quantity +1)}>+</button>
                        <button  className="btn btn-primary ml-2" onClick={()=>removeItem(item.id)}> Remove Item</button>
                    </td>
                    </tr>
                 <div>
                 </div>
                 </div>  
                )
                
                
            })}
            <h1>Total Amount  {cartTotal}</h1>

        {/* </tbody> */}
        {/* </table> */}
        
        </section>

        </>
    )
}
export default Card;