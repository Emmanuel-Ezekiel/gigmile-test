import Sidebar from "./sidebar/index";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/dashboard/index";
import Captains from "./pages/captains/index";

import "./App.css"
function App() {

  return (
    <>
       <BrowserRouter>
          <main>
            <div className="App">
              <Sidebar/>
              <Routes>
                  <Route path="/captains" element={(<Captains />)} />
                  <Route path="/Dashboard" element={(<Dashboard />)} />
              </Routes>
            </div>
          </main>
      </BrowserRouter>
    </>
  )
}

export default App
