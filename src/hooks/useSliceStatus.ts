import { useAppSelector } from "store/store";

const useSliceStatus = (sliceName: string) => {
  return useAppSelector((state: any) => state[sliceName]?.status);
};

export default useSliceStatus;
