import Logo from "../Logo";
import { Container } from "./style";

interface MenuItens {
  route: string;
  title: string;
}
const Header = () => {
  const menuElements: MenuItens[] = [
    { route: "/about-us", title: "Sobre nós" },
    { route: "/login", title: "Entre" },
  ];
  return (
    <Container>
      <Logo />
      <ul>
        {menuElements.map((element, index) => (
          <li>
            <a className="link" key={index} href={element.route}>
              {element.title}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Header;
