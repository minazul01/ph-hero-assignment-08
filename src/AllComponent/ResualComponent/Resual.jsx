
import PropTypes from 'prop-types'; // ES6


const Page = ({ title, subTitle }) => {
    return (
        <div className='mx-4 py-10 bg-[#9538E2] space-y-6'>
            <h1 className='text-3xl font-bold text-white w-full mx-auto text-center'>{title}</h1>
            <p className='text-base font-normal text-white w-[800px] mx-auto text-center'>{subTitle}</p>
        </div>
    );
};

Page.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default Page;