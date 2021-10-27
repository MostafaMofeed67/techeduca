import React from "react";

const Button = ({
  className,
  content,
  bgColor = "bg-primary",
  disabled = false,
  btnHoverWhite = false,
}) => {
  const classesNames = `py-2 px-5 ${bgColor} text-white rounded shadow font-semibold hover:bg-transparent border-2 ${
    bgColor === "bg-primary"
      ? `border-primary hover:border-primary hover:text-${
          btnHoverWhite ? "white" : "primary"
        }`
      : "border-yellow-400 hover:border-yellow-400 hover:text-yellow-400"
  }   transition duration-500 ease-in-out ${className}  sm:text-xs disabled:cursor-not-allowed disabled:bg-gray-600 disabled:border-gray-600 disabled:text-gray-200 disabled:hover:cursor-not-allowed disabled:hover:bg-gray-600 disabled:hover:border-gray-600 disabled:hover:text-gray-200`;

  return (
    <button className={classesNames} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
