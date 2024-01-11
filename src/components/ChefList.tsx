import { ChefInfo } from "constants/interfaces";
import { useEffect } from "react";
import { fetchChefs } from "store/features/chefSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import "styles/chefSection.scss";

const ChefList: React.FC = () => {
  const dispatch = useAppDispatch();
  const chefs = useAppSelector((state: any) => state.chefs.chefs);
  const status = useAppSelector((state: any) => state.chefs.status);
  const error = useAppSelector((state: any) => state.chefs.error);

  useEffect(() => {
    dispatch(fetchChefs() as any);
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="chefs-container">
      {chefs.map((chef: ChefInfo) => (
        <div key={chef.chef_name} className="image-title-container">
          <img
            className="chef-image"
            src={require(`assets/images/chefs/${chef.chef_img}`)}
            alt={chef.chef_name}
          />
          <h1 className="chef-name">{chef.chef_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ChefList;
