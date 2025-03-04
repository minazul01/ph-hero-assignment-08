import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";









const CategoryBtn = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('/Category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(error => console.log('category json data file error', error))
    }, [])

    // console.log(category)
    return (
        <div className="flex mt-24 md:mt-[500px]">
            <div className="w-1/4 space-y-4 text-center my-5">
            <div><NavLink to="/allproduct" className="w-full btn">All Product</NavLink></div>
                {
                    category.map(categoryBtn => (
                        <div key={categoryBtn.id}>
                            <NavLink to={`/category/${categoryBtn.category}`}
                                className="btn w-full"

                            >

                                <button>{categoryBtn.category}</button></NavLink>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default CategoryBtn;