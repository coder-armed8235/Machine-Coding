import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [page,setPage] = useState(1);

  const FetchData=async()=>{
     const res= await fetch('https://dummyjson.com/products?limit=100');
     const data= await res.json();
     setProducts(data.products);
  }

  useEffect(()=>{
    FetchData();
  },[])

  return (
    <div className="main">
      <h1>Product Detail</h1>
      <div className="container">
           {
            products.slice(page*10-10,page*10).map((product)=>{
              return(
                <div className="card" key={product.id}>
                    <img src={product.thumbnail} alt={product.id} />
                    <span>{product.title}</span>
                </div>
              )
            })
           }
    
      </div>

       <div className="pagination">
         <button
            onClick={()=>page>1 ? setPage(page-1): setPage(page)}
          >⬅️
          </button>
           {Array.from({ length: products.length/10 }, (_, index) => {
             return (
               <button
                 key={index}
                 onClick={() => setPage(index + 1)}
                 className={page === index + 1 ? "active" : ""}
               >
                 {index + 1}
               </button>
             );
            })}
          
          <button
            onClick={()=>page<10 ? setPage(page+1): setPage(page)}
          >➡️
          </button>
          </div>
    </div>
  )
}

export default App
