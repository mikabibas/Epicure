import React from "react";
import { useAppSelector } from "store/store";
import { EFetchStatus } from "constants/enum";
import "styles/loader.scss";

interface LoaderProps {
  sliceName?: string;
}

const Loader: React.FC<LoaderProps> = ({ sliceName = "defaultSlice" }) => {
  const status = useAppSelector((state: any) => state[sliceName]?.status);

  if (status === EFetchStatus.LOADING) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  return null;
};

export default Loader;
