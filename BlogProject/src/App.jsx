import { useDispatch } from "react-redux";
import React,{useState,useEffect} from 'react'
import authService from "./appwrite/auth";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getUser().then((data) => {
      if (data) {
        dispatch(login({ data }));
      } else {
        dispatch(logout());
      }
    }).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return <h1 className='text-4xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Loading</h1>;
  }

  return (
    <div className='min-w-[100vw]'>
      <div className='w-full'>
        <Header />
        <main>
          <Outlet /> {/* This is where child routes will render */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
