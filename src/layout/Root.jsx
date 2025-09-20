import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Root = () => {
  return (
    <div>
      <Navbar/>
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Root;