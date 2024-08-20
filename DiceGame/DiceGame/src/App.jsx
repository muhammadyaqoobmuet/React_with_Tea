import StartGame from "./components/StartGame"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import GamePage from './components/GamePage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "",
          element: <StartGame />
        },
        {
          path: "gameplay",
          element: <GamePage />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
