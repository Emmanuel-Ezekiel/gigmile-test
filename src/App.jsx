import Sidebar from "./sidebar/index";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
function App() {

  return (
    <>
       <BrowserRouter>
          <main>
            <Sidebar/>
          </main>
      </BrowserRouter>
    </>
  )
}

export default App
