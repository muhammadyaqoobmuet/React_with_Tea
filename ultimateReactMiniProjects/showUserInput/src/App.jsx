import Loading from './components/Loading';
import { useState, useEffect } from 'react';
import Tours from './components/Tours';
import TourProject from './components/ToursMiniProject/TourProject';
import CompleteReviewSection from './components/ReviewSection/CompleteReviewSection';
import Accordian from './components/Accordian';
import MainAccordian from './components/AccordianP2/MainAccordian';

import { FullMenu } from './components/Menu/FullMenu';
import TabProject from './components/TabsProject/TabProject';
import Slider from './components/Slider/Slider';
import LoremEpsum from './components/Loremepsum/LoremEpsum';
import { AdvanceColorGenrator } from './components/AdvanceColorGenrator/AdvanceColorGenrator';
import Weather from './components/WeaterApp/Weather';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Grocery from './components/groceryBud/Grocery';
import Navbar from './components/NavBar/Navbar';
import SideBarApp from './components/SiderBar.jsx/SideBarApp';
import Modal from './components/SiderBar.jsx/Modal';
import SideBar from './components/SiderBar.jsx/SideBar';
import { AppProvider } from './components/SiderBar.jsx/context/AppContext';

function App() {


return( 
<>
{/* https://picsum.photos/v2/list?page=1&limit=5 */}
   {/* <ImageSlider  url={'https://picsum.photos/v2/list?page=1&'} limit={5} /> */}
   <AppProvider>

<SideBarApp />
   </AppProvider>


</>
)
}

export default App;
