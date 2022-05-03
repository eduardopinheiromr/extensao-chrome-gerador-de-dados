import React, { useState } from "react";
import ReactDOM from "react-dom";

import ButtonGenerator from "./ButtonGenerator";
import Switch from "./Switch";

import { generators } from "./constants/generators";
import CreditCardGenerator from "./CreditCardGenerator";

const Popup = () => {
  const [data, setData] = useState({
    clicked: "",
    value: "",
    withPontuation: true,
  });

  return (
    <>
      <Switch
        label="Gerar com pontuação:"
        value={data.withPontuation}
        setValue={withPontuation => setData({ ...data, withPontuation })}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {generators.map(generator => (
          <ButtonGenerator
            key={generator.name}
            {...generator}
            data={data}
            setData={setData}
          />
        ))}

        <CreditCardGenerator />
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
