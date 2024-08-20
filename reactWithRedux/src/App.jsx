import { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals , getCartItems} from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const { cartItems,isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal); // Correctly access `isOpen` from `modal` slice
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(()=>{
    dispatch(getCartItems())
  },[])

  if(isLoading){
    return <h1 className='text-5xl text-center mt-48 font-bold text-red animate-pulse'>Loading <span className='text-red-950 text-5xl w-[50px] rounded-full '>.....</span></h1>
  }

  return (
    <>
      {isOpen && <Modal />}
      <Nav />
      <CartContainer />
    </>
  );
}

export default App;
