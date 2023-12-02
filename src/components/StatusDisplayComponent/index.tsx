import React from "react";
import { Loader } from "../";

type StatusDisplayComponentProps = {
  isLoading: boolean;
  error: string | null;
};

const StatusDisplayComponent: React.FC<StatusDisplayComponentProps> = ({
  error,
  isLoading,
}) => {
  if (!error) return <Loader isLoading={isLoading} />;
  return <p className="text-2xl text-red-700">{error}</p>;
};
export default StatusDisplayComponent;
