import React from 'react'

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-full text-white flex flex-col items-center justify-center min-h-screen">
        <img
          src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg"
          className="w-full h-full -z-10 fixed"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="flex flex-row w-[1000px] h-auto items-center justify-between">
          <div className="flex flex-col text-start ">
            <h1 className="text-2xl font-serif">Welcome!</h1>
            <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="w-[300px] ">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              accusantium amet adipisci est, ratione sapiente aperiam
              consequatur dolor? Tempora, nam repudiandae eveniet placeat
              commodi expedita explicabo obcaecati. Neque, explicabo dolor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage
