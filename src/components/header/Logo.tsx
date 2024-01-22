import { EAppRoutes } from "constants/enum";
import { Link } from "react-router-dom";
import "styles/header/header.scss";

interface LogoProps {
  size: number;
  src: string;
}

const Logo: React.FC<LogoProps> = ({ size, src }: LogoProps) => {
  return (
    <Link to={EAppRoutes.HOMEPAGE}>
      <div style={{ width: size, height: size }}>
        <img src={src} alt="logo" className="logo" />
      </div>
    </Link>
  );
};

export default Logo;
