//importing components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

//import context
import { AuthContext } from "./context/AuthContext";

//importing require React router dom component
import { BrowserRouter,Route,Routes } from "react-router-dom";

//importing form data

import NewHotel from "./pages/newhotel/NewHotel";
import NewRoom from "./pages/newroom/NewRoom"

//import style for dark mode
import './style/style.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


import { Navigate } from "react-router-dom";
import { hotelsCol, roomsCol, usersCol } from "./datatablesource";

const ProtectedRoute=({children})=>{
  const {user}=useContext(AuthContext)

  if(!user){
    return <Navigate to="/login"></Navigate>
  }

  return children
}

function App() {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'app dark':'app'}>
      <BrowserRouter>
        <Routes>
           <Route element={<ProtectedRoute><Home></Home></ProtectedRoute>} path="/"></Route>
           <Route element={<Login></Login>} path="/login"></Route>
           <Route path="users">
             <Route index element={<ProtectedRoute><List columns={usersCol}></List></ProtectedRoute>}></Route>
             <Route path=":userId" element={<ProtectedRoute><Single></Single></ProtectedRoute>}></Route>
             <Route path="new" element={<ProtectedRoute><New></New></ProtectedRoute>}></Route>
           </Route>
           <Route path="hotels">
             <Route index element={<ProtectedRoute><List columns={hotelsCol}></List></ProtectedRoute>}></Route>
             <Route path=":hotelId" element={<ProtectedRoute><Single></Single></ProtectedRoute>}></Route>
             <Route path="new" element={<ProtectedRoute><NewHotel></NewHotel></ProtectedRoute>}></Route>
           </Route>
           <Route path="rooms">
             <Route index element={<ProtectedRoute><List columns={roomsCol}></List></ProtectedRoute>}></Route>
             <Route path=":roomId" element={<ProtectedRoute><Single></Single></ProtectedRoute>}></Route>
             <Route path="new" element={<ProtectedRoute><NewRoom></NewRoom></ProtectedRoute>}></Route>
           </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
