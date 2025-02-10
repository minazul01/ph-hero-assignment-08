import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";




const Navbar = () => {

    // const activeLink = 'bg-blue-400 text-black'
    // const normalLink = ''

    return (
        <>
            <div className=" mx-4 mt-3 bg-[#9538E2] rounded-md ">
                <div className="navbar  shadow-sm container mx-auto text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <span className="menu btn btn-outline border-none"><NavLink to='/'
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                                        }`
                                    }
                                >Home</NavLink></span>
                                <span className="menu btn btn-outline border-none"><NavLink to='/statistics'
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                                        }`
                                    }
                                >Statistics</NavLink></span>
                                <span className="menu btn btn-outline border-none"><NavLink to='/dashboard'
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                                        }`
                                    }
                                >Dashboard</NavLink></span>
                                <span className="menu btn btn-outline border-none"><NavLink to='/upcomig'
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                                        }`
                                    }
                                >Upcoming product</NavLink></span>
                            </ul>
                        </div>
                        <a className="text-base md:text-xl">Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">

                            <span className="menu btn btn-outline border-none"><NavLink to='/'
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                                    }`
                                }
                            >Home</NavLink></span>
                            <span className="menu btn btn-outline border-none"><NavLink to='/statistics'
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                                    }`
                                }
                            >Statistics</NavLink></span>
                            <span className="menu btn btn-outline border-none"><NavLink to='/dashboard'
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                                    }`
                                }
                            >Dashboard</NavLink></span>
                            <span className="menu btn btn-outline border-none"><NavLink to='/upcomig'
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                                    }`
                                }
                            >Upcoming product</NavLink></span>


                        </ul>
                    </div>
                    <div className="navbar-end gap-4 text-black cursor-pointer">
                        <span className="p-2 rounded-full bg-white"><GiShoppingCart></GiShoppingCart></span>
                        <span className="p-2 rounded-full bg-white"><CiHeart></CiHeart></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;