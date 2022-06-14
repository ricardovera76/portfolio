import React from "react";
import Header from "../../atoms/Header/Header";
import Title from "../../atoms/Title/Title";
import { IDetails } from "../../../assets/Details";
import Text from "../../atoms/Text/Text";
const Info = ({ title, text }: IDetails) => {
  return (
    <>
      <Header>
        <Title content={title} />
      </Header>
      {text.map((txt, idx) => (
        <Text key={idx}>{txt}</Text>
      ))}
    </>
  );
};

export default Info;
