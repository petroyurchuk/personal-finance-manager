import React from "react";
import { BallTriangle } from "react-loader-spinner";
type LoaderProps = {
  isLoading: boolean;
};
const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <>
      {isLoading && (
        <div className="flex justify-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      )}
    </>
  );
};
export default Loader;
