
import { useAppSelector } from './store/hooks';
import { Outlet, Link } from "react-router-dom";
import Header from './components/Header';
function Layout() {
  const isLogged = useAppSelector((state)=> state.loogedIn.value);
  if (isLogged){
    return (
      <div>
        <Header />
        <Outlet />
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