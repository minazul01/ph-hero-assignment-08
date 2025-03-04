import { Outlet } from 'react-router-dom';
import Footer from './AllComponent/Footer/Footer';
import Navbar from './AllComponent/Header/Navbar';
import { Helmet } from 'react-helmet-async';

function App() {


  return (
    <>
      <div className='container mx-auto'>
        <Helmet>
          <title>Home pages</title>
        </Helmet>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-285px)]'>
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
