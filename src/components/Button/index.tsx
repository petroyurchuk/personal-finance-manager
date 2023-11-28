import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  whatToDo: () => void;
};
const Button: React.FC<ButtonProps> = ({ children, whatToDo }) => {
  return (
    <button
      className="min-w-[220px] max-w-[400px] bg-blue-950 text-white text-center p-2 rounded-lg hover:bg-blue-800 transition-bg duration-200"
      onClick={() => whatToDo()}
    >
      {children}
    </button>
  );
};
export default Button;
