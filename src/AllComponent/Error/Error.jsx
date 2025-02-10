
const Error = () => {
    return (
        <div className="grid justify-center justify-items-center text-4xl font-bold my-24">
            <h1>Pages is not found!</h1>
            <p>404</p>
            <progress className="progress progress-neutral w-56" value={0} max="100"></progress>
            <progress className="progress progress-neutral w-56" value="10" max="100"></progress>
            <progress className="progress progress-neutral w-56" value="40" max="100"></progress>
            <progress className="progress progress-neutral w-56" value="70" max="100"></progress>
            <progress className="progress progress-neutral w-56" value="100" max="100"></progress>
        </div>
    );
};

export default Error;