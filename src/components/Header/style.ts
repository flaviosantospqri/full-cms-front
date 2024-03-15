import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
  position: fixed;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.75);
  background-color: rgba(27, 39, 53, 0.2); /* Cor de fundo translúcido */
  backdrop-filter: blur(8px); /* Aplica o efeito de desfoque */
  ul {
    display: flex;
    width: 20%;
    justify-content: space-around;
    margin-left: auto;
    align-items: center;
    list-style-type: none;
    li a {
      text-decoration: none;
      color: #ffffff;
    }
  }
  a:hover {
    color: #3a5edb;
    transition-duration: 300ms;
  }
`;
