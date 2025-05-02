import React, { useEffect, useState } from 'react'
import { dataType } from '..'
import { GET, POST } from '../api/hello';

const userHandler = ["name", "number", "email", "password"];

const Register = () => {
    const [data, setData] = useState<dataType[]>([]);

    useEffect(() => {
      const get = async () => {
        setData(await GET());
      }
      get()
    }, [])

    useEffect(() => {
      console.log(data);
    }, [data]);

  const [user, setUser] = useState<dataType>({
    personal: { name: "", number: 0 },
    _id: "",
    email: "",
    password: "",
    id: Number(data.length) + 1,
  });

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name" || name === "number") {
      setUser((prev) => ({
        ...prev,
        personal: {
          ...prev.personal,
          [name]: name === "number" ? Number(value) : value,
        },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center min-h-screen">
      <div className="w-[350px] flex flex-col items-center justify-center h-auto rounded-2xl p-10 bg-neutral-800">
        <h1 className='text-4xl font-serif'>Sign up</h1>
        {userHandler.map((item) => (
          <div className="flex flex-col pt-5 gap-2">
            <label className="ml-2 text-white text-sm">{item}:</label>
            <input
              type="text"
              name={item}
              placeholder={item}
              onChange={(e) => onchange(e)}
              className="w-[220px] py-2 px-5 focus:outline-none border border-amber-700 rounded-full bg-amber-700 focus:bg-amber-800"
            />
          </div>
        ))}
        <button
          onClick={() => {
            POST(user);
            console.log(user);
          }}
          className="bg-amber-700 ml-30 hover:bg-amber-800 transition-colors mt-8 py-3 px-6 cursor-pointer rounded-r-4xl rounded-2xl"
        >
          Submit!
        </button>
      </div>
    </div>
  );
};

export default Register
