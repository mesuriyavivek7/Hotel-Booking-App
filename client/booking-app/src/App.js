//importing react router dom
import { BrowserRouter,Routes,Route } from "react-router-dom";

//importing css
import './App.css'

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/hotels" element={<List/>}></Route>
          <Route path="/hotels/:id" element={<Hotel/>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
