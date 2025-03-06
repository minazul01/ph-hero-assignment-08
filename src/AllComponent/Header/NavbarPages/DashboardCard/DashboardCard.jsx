import { Link } from "react-router-dom";
import Page from "../../../ResualComponent/Resual";
import DashCard from "./DashCard";
// import Card from "./Card";


const DashboardCard = () => {
    return (
        <div>

            <Page title="Dashboard" subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!" btnOne="Card" btnTwo="Wishlist">

            </Page>
            <div className="mx-4 bg-[#9538E2] text-center pb-5">
                <Link ><button className="py-2 px-8 bg-lime-300 hover:bg-gray-100 cursor-pointer rounded-xl">Wishlist</button></Link>
                <Link><button className="py-2 px-8 bg-white hover:bg-lime-300 cursor-pointer rounded-xl">Wishlist</button></Link>
            </div>
            <DashCard></DashCard>

        </div >
    );
};

export default DashboardCard;