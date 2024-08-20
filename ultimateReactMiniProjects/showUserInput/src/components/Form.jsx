import React,{useState} from 'react'
export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", age: "" });
  const [users, setUsers] = useState([]);   // To store multiple user entries

  const handleButton = (e) => {
    e.preventDefault();
    const newUser = { ...user, id: new Date().getTime().toString() };
    if(user.name && user.email && user.age){

      setUsers([...users, newUser]);
      setUser({ name: "", email: "", age: "" }); // Clear form after submission  
    }
  };

    const manageChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    // container
    <div className="w-full min-h-screen bg-zinc-100 flex justify-center items-center">

      {/* hold the  form box */}
      <div className="w-[50vw] h-[60vh] bg-zinc-300 rounded-md shadow-sm shadow-slate-400">
        <div>
          <h1 className="text-4xl font-bold text-center my-2">Fill The Form</h1>
        </div>
        <div>
          <form  className="flex flex-col self-center">
            <div className="flex gap-2 items-center">
              <label htmlFor="name" className="text-xl font-sans">
                Name
              </label>
              <input
                onChange={manageChange}
                value={user.name}
                id="name"
                name="name"
              />
            </div>

            <div className="flex gap-2 items-center">
              <label htmlFor="email" className="text-xl font-sans">
                Email
              </label>
              <input
                onChange={manageChange}
                value={user.email}
                id="email"
                name="email"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="age" className="text-xl font-sans">
                Age{" "}
              </label>
              <input
                onChange={manageChange}
                value={user.age}
                id="age"
                name="age"
                className="ml-2"
              />
            </div>

            <button
            onClick={handleButton}
              type="submit"
              className="self-start mt-2 border px-2 py-2 bg-sky-400 rounded text-white font-semibold"
            >
              submit form
            </button>
          </form>

          <div className="bg-red-300 w-full">
            <h1 className="text-center font-bold text-2xl">User Info</h1>

            <div className="px-4 w-full h-full">
              <ul>
                {users.map((user) => (
                  <li key={user.id}>
                  {"name "}  {user.name} - {"email "} {user.email} - {"age "}  {user.age}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

