import React, { useEffect, useState } from 'react'

const Products = () => {

    const [product,setProduct]=useState({});
    const [bill,setBill]=useState(0)


    const fetchApi=async ()=>{
        try{
            const data=await fetch('https://fakestoreapi.com/products/1')
            const res=await data.json();
            setProduct(res)


        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(() => {
     fetchApi();
    
    }, [])
    
    const handleProduct=()=>{
        setBill(product.price)
        
    }
    const discount=()=>{
        let discount =10/100;
        let totalBill=bill-discount
        setBill(totalBill);
    }



  return (
    <div>
      <div>
        <h2>{product.title}</h2>
        <div>{product.image}</div>
        <p>${product.price}</p>
      </div> 
    <div>
        <button onClick={handleProduct}>Add Product</button>

        <p>Actual Bill{bill}</p>
        <button onClick={discount}>Disocunted Bill</button>
        <p>{bill}</p>

    </div>
    </div>
  )
}

export default Products
