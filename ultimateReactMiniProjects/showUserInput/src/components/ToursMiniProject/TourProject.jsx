import React,{useState,useEffect} from 'react'
import Loading from '../Loading';
import Tours from '../Tours';

function TourProject() {
  
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
  
    const fetchTours = async () => {
      try {
        setLoading(true); // for sure for sure
        const resp = await fetch('https://www.course-api.com/react-tours-project');
        const data = await resp.json();
        setTours(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchTours();
    }, []);
  
    const deleteTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
    };
  if(tours.length ===0 && !loading){
    return(
  
      <div>
        <h1 className='text-5xl mt-20 font-bold text-center'>Empty List</h1>
      </div>
      
    )
  }
    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
  
    return (
      <main>
        <Tours tours={tours} deleteTour={deleteTour} />
      </main>  
    );
  
}

export default TourProject
