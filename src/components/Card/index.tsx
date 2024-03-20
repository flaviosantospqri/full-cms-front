interface Card {
  listItens: any[];
}

const Card = ({ listItens }: Card) => {
  return (
    <>
      <ul className="listItem">
        {listItens.map((item, index) => (
          <li className="item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Card;
