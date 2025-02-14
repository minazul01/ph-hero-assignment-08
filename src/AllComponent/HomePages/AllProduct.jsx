
import PropTypes from 'prop-types';


const AllProduct = ({product}) => {
    // console.log(product)
    const {product_title, product_image, price} = product


    return (
        <>
        {/* <Outlet></Outlet> */}
            <div className="card bg-base-100 shadow-sm ">
                <figure className="px-10 pt-10 ">
                    <img
                        src={product_image}
                        alt="product"
                        className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-start text-center">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price : ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

AllProduct.propTypes = {
    product: PropTypes.object,
}

export default AllProduct;