import React from "react";

type CommonLayoutProps = {
  children: React.ReactNode;
};
const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div className="border-2 border-gray-600 bg-slate-200 w-full flex flex-col gap-5 p-2">
      {children}
    </div>
  );
};
export default CommonLayout;
