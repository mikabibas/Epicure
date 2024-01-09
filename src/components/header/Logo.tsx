import "styles/header/header.scss";

interface LogoProps {
  size: number;
  src: string;
}

const Logo: React.FC<LogoProps> = ({ size, src }: LogoProps) => {
  return (
    <div style={{ width: size, height: size }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        src={src}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
