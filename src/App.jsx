import { useEffect, useState } from "react";
import{Loading} from './Loading'
import {Tours} from './Tours'



const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState (false);
  const [tours, setTours] = useState([])


  const removeTour = (id) =>{
    const newTour = tours.filter((tour)=>tour.id !== id)
    setTours(newTour)
  }

 
  
  const fetchData = async() =>{
    setIsLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json()
      setTours(data);
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
    setIsLoading(false);

  }

  useEffect(()=>{
    fetchData();
  }, [])

 if(isLoading){
  return <Loading/>
 }

 //N.B set up a sad face when there is an error
 if(isError){
  return <h2>
    There was an error...
  </h2>
 }

 
 if(tours.length === 0){
  return(
    <main>
      <div className="title">
        <h2>No tours left</h2>
        <button type='button' style={{marginTop:'2rem'}} className="btn" onClick={fetchData}>refresh</button>  
      </div>
    
    </main>
    
  )
 }


  return(
    <main>
      <Tours tours = {tours} removeTour={removeTour} />
    </main>
  ) 
};
export default App;
