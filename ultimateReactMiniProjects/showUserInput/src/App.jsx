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
import StripeMain from './components/StripeLandingPage/StripeMain';
import {StripeProvider} from './components/StripeLandingPage/stripeContext/stripeContext';
import ShowMore from './components/ShowMore/ShowMore';
import MainPageTree from './components/TreeUiVeiw/MainPageTree';
import ThemeChanger from './components/LightThemeWithCss/ThemeChanger';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import MainTab from './components/TabInterveiwQuest/MainTab';
import ToggleSwitch from './components/ToogleSwitch/ToggleSwitch'
import SuggestionToI from './components/SuggestionsToInput/SuggestionToI';
import FeatureFlag from './components/featureFlag/FeatureFlag';
import GlobalApiDummyDataContext from './components/featureFlag/context/ApiContext'

// for  treeVeiwComponent

const sideMenuData = [
   {
     label: "Home",
     to: "/",
   },
   {
     label: "Profile",
     to: "/profile",
     children: [
       {
         label: "Details",
         to: "details",
         children: [
           {
             label: "Location",
             to: "location",
             children: [
               {
                 label: "City",
                 to: "city",
               },
             ],
           },
         ],
       },
     ],
   },
   {
     label: "Settings",
     to: "/settings",
     children: [
       {
         label: "Account",
         to: "account",
       },
       {
         label: "Security",
         to: "security",
         children: [
           {
             label: "Login",
             to: "login",
           },
           {
             label: "Register",
             to: "register",
             children : [
                 {
                     label : 'Random data',
                     to : ''
                 }
             ]
           },
         ],
       },
     ],
   },
 ];
function App() {


return( 
<>
{/* https://picsum.photos/v2/list?page=1&limit=5 */}
   {/* <ImageSlider  url={'https://picsum.photos/v2/list?page=1&'} limit={5} /> */}
   
   {/* <AppProvider>
   <SideBarApp />
   </AppProvider> */}

      {/* <StripeProvider>
      <StripeMain />
      </StripeProvider> */}

      {/* <ShowMore />   */}
      {/* <MainPageTree sideMenuData={sideMenuData}  /> */}
     {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=70&skip=0'} /> */}
     {/* <TabProject /> */}
     {/* <MainTab /> */}
        {/* <MainAccordian /> */}
        
        {/* <ToggleSwitch /> */}


    <GlobalApiDummyDataContext>
    <FeatureFlag/>
    </GlobalApiDummyDataContext>

    {/* <AdvanceColorGenrator />
        <SuggestionToI/> */}
</>
)
}

export default App;
