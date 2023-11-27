import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import SectionApp from "../SectionApp";
import Footer from "../Footer/indes";
import AppLayoutStyled from "./AppLayoutStyled";
import Content from "./Content";


function AppLayout({ }) {
  return (
    <AppLayoutStyled>
      <Header />
      
      {/* conteudo */}
      <Content>
        <Sidebar />
        <SectionApp>
          <Outlet />
        </SectionApp>
      </Content>

      <Footer />
      {/* footer */}
    </AppLayoutStyled>
  );
}

export default AppLayout;
