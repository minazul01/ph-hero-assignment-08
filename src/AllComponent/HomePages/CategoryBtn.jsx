import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AllProduct from "./AllProduct";

const CategoryBtn = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./Alldata.json')
            .then(res => res.json())
            .then(data => {
                setData(data.AllData)
            })
    }, [])
//    console.log(data)
    return (
        <div className="container mx-auto mt-36 md:mt-[550px] flex-row md:flex border-2">
            <div className="md:w-1/4 border-2 text-center grid grid-cols-3 md:flex md:flex-col gap-4 text-base md:text-xl font-bold">
                <NavLink to='/allproduct'
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-xl ${isActive ? "bg-blue-500 text-white" : "text-gray-300"
                        }`
                    }
                ><button className="p-2 rounded-xl  cursor-pointer px-4">All Product</button></NavLink>
                <NavLink><button className="p-2 rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-300">Laptops</button></NavLink>
                <NavLink><button className="p-2 rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-300">Iphones</button></NavLink>
                <NavLink><button className="p-2 rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-300">Accessories</button></NavLink>
                <NavLink><button className="p-2 rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-300">Smart Watches</button></NavLink>
                <NavLink><button className="p-2 rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-300">MacBook</button></NavLink>

            </div>
            <div className="md:w-3/4 text-center grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <Outlet></Outlet>
                {
                    data.map((product) => <AllProduct key={product.product_id}></AllProduct>)
                }
            </div>

        </div>
    );
};

export default CategoryBtn;