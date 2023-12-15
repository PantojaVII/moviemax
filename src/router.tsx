import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/Login/ForgotPassword";
import SignUp from "./Pages/Login/SignUp";
import Home from "./Pages/App/home";
import AppLayout from "./Components/AppLayout";
import PageMovies from "./Pages/App/Movies";
import PagePlayer from "./Pages/App/Player";
import AuthProvider from "./Context/auth/AuthProvider";
import { NotificationContextProvider } from "./Context/notifications/NotificationContext";
import { SidebarProvider } from "./Context/menu/menuContext";
import Search from "./Pages/App/Search";
function Router() {
  return (
    <BrowserRouter>
      <NotificationContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
        <AuthProvider>
          <SidebarProvider>
            <Routes>
              <Route path="app/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="filmes" element={<PageMovies />} />
                <Route path="player/:type/:id" element={<PagePlayer />} />
                <Route path="search" element={<Search />} />
              </Route>
            </Routes>
          </SidebarProvider>
        </AuthProvider>
      </NotificationContextProvider>
    </BrowserRouter>
  );
}

export default Router;
