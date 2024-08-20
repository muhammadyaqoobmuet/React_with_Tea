import React, { useState } from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

// App Component
const App = () => {
  const [user, setUser] = useState({ name: 'John Doe' });

  return (
    
     
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    
    
    // <div>
    //   <Header user={user} />
    // </div>
  );
};
// example of PropDrilling
// // Header Component
// const Header = ({ user }) => {
//   return (
//     <header>
//       <NavBar user={user} />
//     </header>
//   );
// };

// // NavBar Component
// const NavBar = ({ user }) => {
//   return (
//     <nav>
//       <UserProfile user={user} />
//     </nav>
//   );
// };

// // UserProfile Component
// const UserProfile = ({ user }) => {
//   return <div>User: {user.name}</div>;
// };

export default App;
