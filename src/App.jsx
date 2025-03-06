import { Outlet } from 'react-router-dom';
import Footer from './AllComponent/Footer/Footer';
import Navbar from './AllComponent/Header/Navbar';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
function App() {


  return (
    <>
    <Toaster></Toaster>
      <div className='container mx-auto overflow-hidden'>
        <Helmet>
          <title>Homoe / pages</title>
        </Helmet>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-285px)]'>
          <Helmet>
            <title>Category /  Products</title>
          </Helmet>
          <Outlet></Outlet>
        </div>
        <main>

        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
