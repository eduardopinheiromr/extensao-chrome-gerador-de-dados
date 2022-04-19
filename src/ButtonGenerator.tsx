import React, { useState } from "react";
import Button from "./Button";
import { BsClipboardCheck, BsClipboard } from "react-icons/bs";

type Props = {
  generatorFn: (options: GeneratorProps) => string;
  name: string;
  data: DataProps;
  setData: (data: DataProps) => void;
};
export default function ButtonGenerator({
  generatorFn,
  name,
  data,
  setData,
}: Props) {
  const handleGenerate = () => {
    const { withPontuation } = data;
    const generatedData = generatorFn({ withPontuation });
    setData({
      ...data,
      clicked: name,
      value: generatedData,
    });
    navigator.clipboard.writeText(generatedData);
  };
  return (
    <Button onClick={handleGenerate}>
      {data.clicked === name ? (
        <>
          <span>{name} copiado!</span>
          <BsClipboardCheck style={{ marginLeft: 10 }} />
        </>
      ) : (
        <>
          <span>Gerar {name}</span>
          <BsClipboard style={{ marginLeft: 10 }} />
        </>
      )}
    </Button>
  );
}
