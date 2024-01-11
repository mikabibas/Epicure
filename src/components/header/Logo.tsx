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
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={src}
          alt="logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
