
import Banner from '../../../assets/banner.jpg'
import CategoryBtn from '../../HomePages/CategoryBtn';

const Home = () => {
    return (
        <>
            <div className="mx-4 bg-[#9538E2] rounded-md relative">
                <div className="container mx-auto text-white py-10 pb-28 md:pb-72">
                    <h1 className="w-full md:w-3/4 mx-auto text-center text-3xl md:text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 w-full md:w-3xl mx-auto text-center">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <div className="w-full grid justify-center items-center"><button className="btn btn-primary p-2 rounded-3xl bg-white text-xl font-normal text-[#9538E2]">Get Started</button></div>
                </div>
            </div>
            <div className="w-2xs md:w-5xl mx-auto min-h-[560px] p-1 md:p-4 rounded-2xl border-2 border-white absolute top-[440px] md:top-[400px] left-12 md:left-48">
                <img className='rounded-2xl' src={Banner} alt="" />
            </div>
            <CategoryBtn></CategoryBtn>
        </>
    );
};

export default Home;