import React from "react";

interface ImgProps {
  image: string;
  name: string;
  width: number;
  height: number;
}

export default function Img(props: ImgProps) {
  return (
    <>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: props.width, height: props.height }}
      />
    </>
  );
}
