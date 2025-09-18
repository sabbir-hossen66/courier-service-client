import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Root = () => {
  return (
    <>
      <Navbar/>
      <main className="pt-16">  {/* push content below navbar */}
        <Outlet />
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default Root;