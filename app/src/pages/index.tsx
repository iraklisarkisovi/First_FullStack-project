import LandingPage from "./Components/LandingPage";
import Header from "./Components/Header";
import Secondary from "./Components/Secondary";

export type dataType = {
  personal: {
    name: string;
    number: number;
  };
  _id: string;
  email: string;
  password: string;
};

export default function Home() {

  return (
    <>
      <Header/>
      <LandingPage/>
      <Secondary/>
    </>
  );
}
