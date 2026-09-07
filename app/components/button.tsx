type ButtonProp = {
    label : string
}

const Button = ({ label } : ButtonProp) => {
    return (
        <button className="bg-primary font-mono rounded-full px-5 py-2 text-gray-200 font-bold">
            { label }
        </button>
    );
}

export default Button;