import { Outlet } from 'react-router-dom';
import Footer from './AllComponent/Footer/Footer';
import Navbar from './AllComponent/Header/Navbar';


function App() {


  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-285px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
