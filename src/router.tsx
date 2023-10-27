import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/Login/ForgotPassword";
import SignUp from "./Pages/Login/SignUp";
import Home from "./Pages/App/home";
import AppLayout from "./Components/AppLayout";
import PageMovies from "./Pages/App/Movies";
import PagePlayer from "./Pages/App/Player";
 

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<div>Página não encontrada</div>} />s
        
        <Route path="app/" element={<AppLayout />} >
          <Route index element={<Home/>}></Route>
          <Route path="filmes" element={<PageMovies/>}></Route>
          <Route path="player" element={<PagePlayer/>}></Route>
        </Route>
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
