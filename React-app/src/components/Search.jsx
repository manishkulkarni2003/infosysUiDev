import { useState } from "react";

const Search=()=>{
    const data =["Manish","Janya","Nithin","Ayush","Stalin","MOdi","JOhn cena"]

    const [searchTerm,setSearchTerm] =useState("");
    const [filteredData,setFilteredData]=useState(data)

    const search=()=>{
        setFilteredData(
            data.filter((name)=>name.toLowerCase().includes(searchTerm.toLowerCase()))
            


        )
    }
    const reset =()=>{
        setFilteredData(data);
    }

    return(
        <div >

            <input type="text" placeholder="Search For the Name" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            <button onClick={search} >Search</button>
            <button onClick={reset}>Reset</button>
            <div>
                <ul>
                    {filteredData.map((name,index)=>(
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>


        </div>

    )
}

export default Search;