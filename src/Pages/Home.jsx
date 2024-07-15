import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [protitle, setProtitle] = useState("");
  const [prodes, setProdes] = useState("");
  const [checkbox, setCheckbox] = useState(Boolean);
  const Max_length = 100;
  const remainder = Max_length - prodes.length;
  console.log(checkbox);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-1/3 bg-slate-950 shadow-md rounded-md px-4 py-5 box-border">
          <div>
            <h1 className="font-mono text-3xl text-gray-300 text-center mb-4">
              Project Submition Form
            </h1>
            <div className="container ">
              <div className=" grid grid-cols-3 grid-flow-col gap-3">
                <div className="">
                  <h1 className="w-full font-mono text-3xl text-gray-300 border border-white text-center mb-4">
                    Name
                  </h1>
                  <h1 className="w-full font-mono text-2xl text-gray-300 text-center border border-White mb-4 mt-3">
                    Project Title
                  </h1>
                  <h1 className="w-full font-mono text-lg text-gray-300 text-center border border-White mb-4 mt-3">
                    Project Description
                  </h1>
                </div>
                <div className="col-span-2">
                  <input
                    placeholder="Enter your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className=" w-full rounded-md bg-gray-600 border-blue-500 p-2 outline-none"
                  />
                  <input
                    placeholder="Enter your Project Title"
                    onChange={(e) => setProtitle(e.target.value)}
                    value={protitle}
                    className=" w-full rounded-md bg-gray-600 border-blue-500 p-2 outline-none mt-3"
                  />
                  <textarea
                    placeholder="Add your bio"
                    onChange={(e) => setProdes(e.target.value)}
                    value={prodes}
                    maxLength={100}
                    rows={3}
                    className=" w-full rounded-md bg-gray-600 border-blue-500 p-2 mt-3 resize-none outline-none mt-3"
                  />
                  <p className="text-white text-right">
                    {remainder} Character Remaining
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div>
                <div className="input">
                  <input
                    type="checkbox"
                    value={checkbox}
                    className="text-white"
                  />
                  <p className="text-white">React</p>
                </div>
              </div>
              <div>
                <button className="bg-gray-600 text-white text-xl font-mono px-5 py-2 rounded-md mt-3">
                  Cancel
                </button>
                <button className="bg-gray-600 text-white text-xl font-mono px-5 py-2 rounded-md mt-3 ml-2">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
