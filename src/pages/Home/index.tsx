import Card from "../../components/Card";
import Header from "../../components/Header";
import { Container, Title, Content, SubTitle } from "./style";

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Gestão inteligente</Title>
        <SubTitle>
          Aqui seu tempo vale mais!<p>Nosso produtos: </p>
        </SubTitle>
        <Card listItens={[1, 2, 3]} />
      </Content>
    </Container>
  );
}

export default Home;
