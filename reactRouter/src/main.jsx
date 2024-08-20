import React from "react";
import ReactDOM from "react-dom/client";
import { createRoutesFromElements, Route } from "react-router-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Layout from "./Layout";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>,
//       },
//       {
//         path:"about",
//         element:<About/>,
//       },
//       {
//         path:"contact-us",
//         element:<Contact/>
//       },
//         {
//           path:"user/:userid",
//           element:<User/>
//         },

//        {
//             path:"github",
//             element:<Github/>
//           }

//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(

//   <>
//     <RouterProvider  router={router}/>
//   </>

// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
      loader={githubInfoLoader}
       path="github"
        element={<Github />}
         />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
