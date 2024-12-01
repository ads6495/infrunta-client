import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';

const Layout = () => {
  const location = useLocation();

  // Define routes where the Header should not appear
  const noHeaderRoutes = ['/login', '/signup'];

  return (
    <div>
      {/* Conditionally render the Header */}
      {!noHeaderRoutes.includes(location.pathname) && <Header />}
      
      {/* Render the page content */}
      <Outlet />
    </div>
  );
};

export default Layout;