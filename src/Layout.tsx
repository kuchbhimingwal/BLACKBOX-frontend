
import { useAppSelector } from './store/hooks';
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
function Layout() {
  const isLogged = useAppSelector((state)=> state.loogedIn.value);
  if (isLogged){
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  } else {
    return (
      <div className="">

        <Outlet />
      </div>
    )
  }
}

export default Layout