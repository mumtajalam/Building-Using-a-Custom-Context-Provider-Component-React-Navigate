import React from "react";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
    </>
  );
};

export default Navigate;
