import { formatDistance } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/taskSlice";
import Update from "../component/Update";

const TaskView = () => {
  const initialShow = 6;
  const [next, setNext] = useState(initialShow);
  const [visible, setVisible] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedProjectTitle, setEditedProjectTitle] = useState("");
  const [editedProjectDescription, setEditedProjectDescription] = useState("");
  const [editedId, setEditedId] = useState();

  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleLoadMore = () => {
    setNext((prev) => prev + 3);
  };

  const handleUpdate = (task) => {
    setVisible(true);
    setEditedName(task.name);
    setEditedProjectTitle(task.protitle);
    setEditedProjectDescription(task.prodes);
    setEditedId(task.id);
  };

  if (visible) {
    return (
      <Update
        setVisible={setVisible}
        editedName={editedName}
        setEditedName={setEditedName}
        editedProjectTitle={editedProjectTitle}
        setEditedProjectTitle={setEditedProjectTitle}
        editedProjectDescription={editedProjectDescription}
        setEditedProjectDescription={setEditedProjectDescription}
        editedId={editedId}
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>TaskView</title>
      </Helmet>
      <div className="container">
        <div className="grid grid-cols-3 gap-3 mt-4">
          {tasks.slice(0, next)?.map((task) => (
            <div
              className="shadow-md bg-white rounded-md px-4 py-3 border border-slate-600"
              key={task.id}
            >
              <h1 className="font-mono text-xl font-bold">{task.name}</h1>
              <p>{task.protitle}</p>
              <p>{task.prodes}</p>
              <span className="text-base font-mono text-slate-500">
                {formatDistance(task.createdAt, new Date(), {
                  addSuffix: true,
                })}
              </span>
              <div className="flex items-center justify-end gap-x-3">
                <button
                  className="px-5 py-2 bg-red-500 text-white font-medium rounded-md"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
                <button
                  className="px-5 py-2 bg-slate-500 text-white font-medium rounded-md"
                  onClick={() => handleUpdate(task)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
        {next < tasks.length && (
          <div className="text-center">
            <button
              className="px-4 py-2 bg-green-800 rounded-md text-white mt-5"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskView;
