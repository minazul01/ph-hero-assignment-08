import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { Helmet } from "react-helmet-async";
import { addProduct,  handleWishlistProducts } from "../LocalStores/LocalStore";
const ProductDetails = () => {
    const { id } = useParams();

    // Destructuring useLoaderData()
    const { AllData: products = [] } = useLoaderData();
   
    // Find the product by id
    const [detail, setDetail] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [disable, setDiseble] = useState(false)

    useEffect(() => {
        const product = products.find((singleData) => singleData.product_id == id);
        setDetail(product);
    }, [products, id]);



    /* handle add to card btn */
    const handleAddProduct = product => {
        addProduct(product);
    }

    /* handle wishlist product */
    const handleWishlistProduct = product => {
        handleWishlistProducts(product);
    }
    return (
        <>
            <div className="mx-4 bg-[#9538E2] rounded-md relative">
                <div className="container mx-auto text-white py-10 pb-28 md:pb-40">
                    <h1 className="w-full md:w-3/4 mx-auto text-center text-3xl md:text-5xl font-bold">Product Details</h1>
                    <p className="py-6 w-full md:w-3xl mx-auto text-center">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>
            <div className="absolute top-72 md:top-72 right-24 md:right-44">
                <Helmet>
                    <title>product / details</title>
                </Helmet>
                {detail ? (
                    <div className="flex-col md:flex-row  md:w-[1050px] mx-auto card card-side bg-base-100 shadow-sm p-4 rounded-2xl gap-10">
                        <figure className="w-52 md:w-1/2 h-[200px] md:h-[450px]">
                            <img
                                src={detail.product_image}
                                alt={detail.product_title} />
                        </figure>
                        <div className="space-x-5 w-52 md:w-1/2 h-[200px] md:h-[450px] overflow-scroll md:overflow-hidden">
                            <div className="space-y-3">
                                <h2 className="card-title">{detail.product_title}</h2>
                                <p>price : $ {detail.price}</p>
                                <button className="p-1 rounded-4xl border-green-500 bg-green-500">In stock</button>
                                <p>{detail.description}</p>
                            </div>
                            <div>
                                <h2 className="card-title my-5">specification</h2>
                                <p>{detail.specification[0]}</p>
                                <p>{detail.specification[1]}</p>
                            </div>
                            <div>
                                <h3 className="card-title mt-4">Rating</h3>
                                <div className="rating my-5">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                    <span className="bg-white text-black ml-2 p-1 ">{detail.rating}</span>
                                </div>
                                <div className="flex justify-start items-center gap-3">
                                    <button onClick={() => handleAddProduct(detail)} className="py-1 px-5 bg-[#8D36D6] rounded-2xl cursor-pointer">Add To Card</button>
                                    <button onClick={() => handleWishlistProduct(detail)} className="text-3xl p-2 rounded-full bg-gray-200 cursor-pointer"><CiHeart></CiHeart></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-xl">Loading product details...</p>
                )}
            </div>
        </>
    );
};

export default ProductDetails;