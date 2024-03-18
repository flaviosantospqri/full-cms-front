import React from "react";

import Header from "../../components/Header";
import { Container } from "./style";

const Template: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <h1>Home</h1>
      </Container>
    </>
  );
};
export default Template;
