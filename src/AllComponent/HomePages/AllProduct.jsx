


const AllProduct = () => {
    // const data = useLoaderData();
    // console.log(data.phones)
    // console.log(data.laptops)
    // console.log(data.smartwatches)
    // console.log(data.macbooks)

    return (
        <div className="card bg-base-100 shadow-sm w-[300px]">
            <figure className="px-10 pt-10 w-[282px]">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;