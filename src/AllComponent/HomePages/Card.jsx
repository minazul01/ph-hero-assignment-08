import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';


const Card = () => {
    const da = useLoaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const data = da.AllData || [];





    const { category } = useParams()

    const [product, setProduct] = useState([]);
    useEffect(() => {

        if (category) {

            const filterProduct = [...data].filter(p => String(p.category) === String(category))

            setProduct(filterProduct)
        } else {
            setProduct(data.slice(0, 6))
        }


    }, [category, data])



    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    product.map(({ product_id, product_title, product_image, price }) => (
                        <div key={product_id}>
                            <div className=" bg-base-100 w-[300px] rounded-md shadow-xl">
                                <figure className="p-5 flex justify-center items-center">
                                    <img
                                        src={product_image}
                                        alt={product_title}
                                        className="rounded-xl h-[200px] " />
                                </figure>
                                <div className="card-body items-start text-start">
                                    <h2 className="card-title">{product_title}</h2>
                                    <p>${price}</p>
                                    <div className="card-actions">
                                        <Link to={`/product/${product_id}`} className='btn rounded-2xl cursor-pointer hover:bg-gray-200 bg-blue-600'>
                                            <button >View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='my-10'>
                <button onClick={() => setProduct(data)} className='text-2xl font-normal px-2 py-1 bg-blue-500 rounded-xl hover:bg-blue-400'>view all</button>
            </div>
        </>
    );
};

Card.propTypes = {
    item: PropTypes.object,
};

export default Card;
