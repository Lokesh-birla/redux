import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Prod from './product';
import data from './Alldata';
function Home() {
  return (
   <>
   
   <h1 className="text-center mt-4">All itme </h1>
    <section className='container'>
        <div className='row  justify-content-center'>
            {data.productData.map((it,id)=>{
                return(
                    <Prod img={it.img} 
                    title={it.titel}
                     desc={it.desc} 
                     price={it.price} 
                     item={it} 
                     key={id} />
                    
                )
            })}
        </div>
    </section>
   </>
  )
}

export default Home;
