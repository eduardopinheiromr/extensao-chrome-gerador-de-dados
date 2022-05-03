import React, { useState } from "react";
import ButtonGenerator from "./ButtonGenerator";
import { cards } from "./constants/cards";

export default function CreditCardGenerator() {
  const [selectedFlag, setSelectedFlag] = useState(cards[0]);

  const [data, setData] = useState({
    clicked: "",
    value: "",
    withPontuation: true,
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 8px",
        }}
      >
        {cards.map(card => {
          const { Icon, name } = card;
          return (
            <Icon
              onClick={() => setSelectedFlag(card)}
              cursor="pointer"
              color={selectedFlag.name === name ? "coral" : "white"}
              title={name}
              size="40px"
            />
          );
        })}
      </div>
      <ButtonGenerator
        generatorFn={() => selectedFlag.generatorFn()}
        name="Cartão"
        data={data}
        setData={setData}
      />
    </div>
  );
}
