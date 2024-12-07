import { useEffect, useState } from "react";

const Api=()=>{
    const [data,setData]=useState(null)
    const[error,setError]=useState(null)
    const [loading,setLoading]=useState(true)

    const fetchData =async ()=>{
        try{
            const data =await fetch('https://jsonplaceholder.typicode.com/todos/2')
            const res =await data.json();
            console.log(res)
            setData(res)
        }catch(err){
            console.log(err,err.message)
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            {loading && <p>Loading..</p>}
            {error && <p>Error:{error}</p>}
            {data && (
            <div>   
                <h3>todo Details</h3>
                <p>{data.id}</p>
                <p>{data.title}</p>

            </div>
            )}
        </div>
    )
}
export default Api;