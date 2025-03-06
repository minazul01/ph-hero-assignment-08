import { useEffect, useState } from "react";
import { allProduct } from "../../../LocalStores/LocalStore";
import { ImCross } from "react-icons/im";


const DashCard = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const products = allProduct;
        setProduct(products);
    }, [])
    const [{ price, product_image, product_title, description } = {}] = product;
    const [addPrice, setPrice] = useState(0);
    useEffect(() => {
        setPrice(addPrice + price)
    }, [addPrice, price])

    return (
        <div className="mx-4 my-16">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">Card</h1>
                <div className="flex justify-center items-center gap-8">
                <p className="text-2xl font-bold">Total cost: {addPrice}</p>
                    <div><button className="py-2 px-8 bg-gray-200 rounded-xl hover:bg-warning cursor-pointer">Short by price</button></div>
                    <div><button className="py-2 px-8 bg-[#C256EA] rounded-xl hover:bg-warning cursor-pointer">Purches</button></div>
                </div>
            </div>
            <div>

                {
                    product.map((product) => (
                        <>
                            <div key={product?.[0]?.product_id} className=" md:h-[200px] my-12 space-x-10 card card-side bg-base-100 shadow-sm w-full">
                                <figure className="md:w-1/3 ">
                                    <img
                                        src={product_image}
                                        alt={product_title} />
                                </figure>
                                <div className="grid justify-start">
                                    <h2 className="card-title">{product_title}</h2>
                                    <p>{description}</p>
                                    <p>price: ${price}</p>
                                </div>
                                <div>
                                    <button className="p-3 rounded-full bg-gray-200 cursor-pointer"><ImCross></ImCross></button>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default DashCard;