import React from 'react'
import { useState, useEffect } from 'react'
import "./App.css"
import Heading from './Heading';


function App() {
  const [records, setRecords] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date().toDateString());

//Fetching data from API
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2f3210a4a3e24e3985358ad812f28aa6')
            .then(response=>response.json())
            .then(data=>setRecords(data.articles)) // Saving data in state
            .catch(err=>console.log(err))    //Handling error  
    },[])

//Searching data 
    const handleFilter = (event) => {
        const value = event.target.value.toLowerCase();
    
        if (value) {
          const filtered = records.filter((item) =>
            item.title.toLowerCase().includes(value)
          );
          setRecords(filtered);
        } else {
          window.location.reload();
        }
      };

  return (
    <div>
        {/* header of website */}
        <div className='header'>
            <p>Daily News</p>
            <input type='text' name='search' placeholder='Search...' onChange={handleFilter}></input>
        </div>
    
        <div className='list'> 
          {/* Display of todays date  */}
            <div className='date'>
              <p>Your briefing<br/>{currentDate}</p>
            </div>
             
        {  
          records.map((list, index)=>{if(list.source.name!= "[Removed]"){
              return(
                  <Heading list={list} key={index}/> //Heading card
                )
            }})
        }
        </div>
    </div>

  )
}

export default App
