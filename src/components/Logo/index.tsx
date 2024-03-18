import img from "../../assets/logo.png";
import { Container } from "./style";

const Logo: React.FC = () => {
  return (
    <Container>
      <img src={img}></img>
    </Container>
  );
};
export default Logo;
