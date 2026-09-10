type ButtonProp = {
    label : string,
    className? : string
}

const Button = ({ label, className } : ButtonProp) => {
    return (
        <button className={`group relative overflow-hidden bg-primary font-mono rounded-full px-5 py-2 text-gray-200 font-bold ${className}`}>
            <span className="relative z-10">
                { label }
            </span>
            <span className="absolute inset-0 -translate-x-full skew-x-20 bg-white/30 transition-all duration-700 group-hover:left-[110%]" />
        </button>
    );
}

export default Button;