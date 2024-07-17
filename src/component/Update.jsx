import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateTask } from "../features/taskSlice";

const Update = ({
  setVisible,
  editedName,
  editedProjectTitle,
  editedProjectDescription,
  editedId,
  setEditedName,
  setEditedProjectTitle,
  setEditedProjectDescription,
}) => {
  const Max_length = 100;
  const remainder = Max_length - editedProjectDescription.length;
  const dispatch = useDispatch();
  const handleEdit = () => {
    const updatedValues = {
      id: editedId,
      name: editedName,
      protitle: editedProjectTitle,
      prodes: editedProjectDescription,
      createdAt: new Date().toString(),
    };

    console.log(updatedValues);

    dispatch(updateTask(updatedValues));
    setVisible(false);
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-1/3 bg-slate-950 shadow-md rounded-md px-4 py-5 box-border p-5">
          <div>
            <div className="relative">
              <h1 className="font-mono text-3xl text-gray-300 text-center mb-4">
                Project Update
              </h1>
              <div
                className="absolute top-0 right-3 w-5 h-5 rounded-full bg-slate-300 flex items-center justify-center cursor-pointer"
                onClick={() => setVisible(false)}
              >
                <RxCross2 />
              </div>
            </div>

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
                    className=" w-full rounded-md bg-gray-600 border-blue-500 p-2 outline-none"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                  <input
                    placeholder="Enter your Project Title"
                    className=" w-full rounded-md bg-gray-600 border-blue-500 p-2 outline-none mt-3"
                    value={editedProjectTitle}
                    onChange={(e) => setEditedProjectTitle(e.target.value)}
                  />
                  <textarea
                    placeholder="Add your bio"
                    maxLength={100}
                    rows={3}
                    className=" w-full rounded-md bg-gray-600 border-blue-500 p-2 resize-none outline-none mt-3"
                    value={editedProjectDescription}
                    onChange={(e) =>
                      setEditedProjectDescription(e.target.value)
                    }
                  />
                  <p className="text-white text-right">
                    {remainder} Character Remaining
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div>
                <button
                  className="hover:bg-gray-800 bg-gray-600 text-white text-xl font-mono px-5 py-2 border border-white rounded-md mt-3 ml-2"
                  onClick={handleEdit}
                >
                  Update Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
