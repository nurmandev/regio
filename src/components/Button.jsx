import Spinner from "./Spinner";

const Button = ({
  onClick,
  type = "button",
  className,
  disabled,
  isLoading,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer flex items-center justify-center gap-5 disabled:opacity-80 disabled:bg-gray-400 text-white capitalize text-16 p-2
      rounded-[5px] bg-primary border-none hover:bg-malon-color ${className}`}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
