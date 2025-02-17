import PropTypes from 'prop-types';

const Card = ({ item }) => {
    const { product_title, product_image, price } = item
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="w-[290px] h-[190px] mx-auto">
                    <img
                        src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    item: PropTypes.object,
}
export default Card;