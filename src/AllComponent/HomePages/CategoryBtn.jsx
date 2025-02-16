import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { useState } from "react";

import Card from "./Card";
{/* <NavLink to='/'
    className={({ isActive }) =>
        `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-500"
        }`
    }
></NavLink> */}




const CategoryBtn = () => {
    const dat = useLoaderData();
    const data = dat.AllData 
    const [filteredData, setFilteredData] = useState(data); 
    // eslint-disable-next-line no-unused-vars
    const [selectedCategory, setSelectedCategory] = useState("all"); 


    const handleCategoryChange = (category) => {
        setSelectedCategory(category); 
        if (category === "all") {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter((item) => item.category.toLowerCase() === category.toLowerCase())); // নির্দিষ্ট ক্যাটাগরি ফিল্টার হবে
        }
    };
    return (
        <div className="flex mt-24 md:mt-[500px]">
            <div className="w-1/4 space-y-4 text-center">
                <div>
                    <NavLink to='/allProduct'
                        className={({ isActive }) =>
                            `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-500"
                            }`
                        }
                    ><button onClick={() => handleCategoryChange("all")}>All Product</button></NavLink>
                </div>
                <div>
                    <NavLink to='/labtop'
                        className={({ isActive }) =>
                            `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-500"
                            }`
                        }
                    ><button onClick={() => handleCategoryChange("laptop")}>Labtop</button></NavLink>
                </div>
                <div>
                    <NavLink to='/watch'
                        className={({ isActive }) =>
                            `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-500"
                            }`
                        }
                    ><button onClick={() => handleCategoryChange("Smartwatch")}>Watch</button></NavLink>
                </div>
                <div>
                    <NavLink to='/iphone'
                        className={({ isActive }) =>
                            `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-500"
                            }`
                        }
                    ><button onClick={() => handleCategoryChange("Phone")}>Iphone</button></NavLink>
                </div>
                <div>
                    <NavLink to='/mackbook'
                        className={({ isActive }) =>
                            `px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "text-gray-500"
                            }`
                        }
                    ><button onClick={() => handleCategoryChange("MacBook")}>Mackbook</button></NavLink>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <Card key={item.product_id} item={item} />
                        ))
                    ) : (
                        <p>No products found in this category.</p>
                    )}
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CategoryBtn;