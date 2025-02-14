import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllProduct from "./AllProduct";

const CategoryBtn = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [isAllDataVisible, setIsAllDataVisible] = useState(false);

    useEffect(() => {
        fetch('./Alldata.json')
            .then(res => res.json())
            .then(apiData => {
                // console.log("Fetched data:", apiData);
                if (apiData && apiData.AllData) {
                    setData(apiData.AllData);
                    setVisibleData(apiData.AllData.slice(0, 6));
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleShowAll = () => {
        setVisibleData(data);
        setIsAllDataVisible(true);
    };

    return (
        <div className="container mx-auto mt-36 md:mt-[550px] flex-row md:flex">
            <div className="md:w-1/4 text-center grid grid-cols-3 md:flex md:flex-col gap-4 text-base md:text-xl font-bold">
                <NavLink to='/allproduct'
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-xl ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                        }`
                    }
                >
                    <button
                        onClick={handleShowAll}
                        className="p-2 rounded-xl cursor-pointer px-4"
                    >
                        All Product
                    </button>
                </NavLink>
                <NavLink to='/laptop'
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-xl ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                        }`
                    }
                ><button  className="p-2 rounded-xl cursor-pointer px-4">Laptops</button></NavLink>
                <NavLink to='/iphone'
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-xl ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                        }`
                    }
                ><button  className="p-2 rounded-xl cursor-pointer px-4">Iphones</button></NavLink>
                <NavLink to='/accessories'
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-xl ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                        }`
                    }
                ><button  className="p-2 rounded-xl cursor-pointer px-4">Accessories</button></NavLink>
                <NavLink to='/watch'
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-xl ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                        }`
                    }
                ><button  className="p-2 rounded-xl cursor-pointer px-4">Smart Watches</button></NavLink>
                <NavLink to='/mackbook'
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-xl ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                        }`
                    }
                ><button  className="p-2 rounded-xl cursor-pointer px-4">MacBook</button></NavLink>
            </div>

            <div className="md:w-3/4 text-center grid md:grid-cols-2 lg:grid-cols-3 gap-5">



                {visibleData.length > 0 ? (
                    visibleData.map((product) => (
                        <AllProduct key={product.product_id} product={product} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default CategoryBtn;
