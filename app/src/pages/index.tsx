import { useEffect, useState } from "react";
import { GET } from "./api/hello";
import Register from "./api/Register";

export type dataType = {
  personal: {
    name: string;
    number: number;
  };
  _id: string;
  email: string;
  password: string;
  id: number;
};

export default function Home() {

  return (
    <>
      <Register/>
    </>
  );
}
