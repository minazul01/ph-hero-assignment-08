
import PropTypes from 'prop-types'; // ES6

const Page = ({title, subTitle}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
};

Page.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default Page;