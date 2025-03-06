import { Helmet } from "react-helmet-async";
import Page from "../../ResualComponent/Resual";

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Satistic pages</title>
            </Helmet>
            <div>
                <Page title='Statistics' subTitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'/>
            </div>
        </div>
    );
};

export default Statistics;