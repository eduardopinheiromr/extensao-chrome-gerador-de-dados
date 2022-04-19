import React, { useState } from "react";
import ReactDOM from "react-dom";

import ButtonGenerator from "./ButtonGenerator";
import Switch from "./Switch";
import { generateCNPJ } from "./utils/generateCNPJ";
import { generateCPF } from "./utils/generateCPF";
import { generateEmail } from "./utils/generateEmail";
import { generatePhone } from "./utils/generatePhone";

const Popup = () => {
  const [data, setData] = useState({
    clicked: "",
    value: "",
    withPontuation: true,
  });

  const generators = [
    {
      name: "CPF",
      generatorFn: generateCPF,
    },
    {
      name: "CNPJ",
      generatorFn: generateCNPJ,
    },
    {
      name: "Celular",
      generatorFn: generatePhone,
    },
    {
      name: "Email",
      generatorFn: generateEmail,
    },
  ];
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
