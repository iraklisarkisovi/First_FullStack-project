import { useEffect, useState } from "react";
import { GET } from "./api/hello";

type dataType = {
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
  const [data, setData] = useState <dataType[]>([]);

  useEffect(() => {
    const get = async () => {
      setData(await GET())
    }
    get()
  }, [])  

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      {data.map((item: any) => (
        <> 
          <h1 className="text-white">{item.personal.name}</h1>
        </>
      ))}
    </div>
  );
}
