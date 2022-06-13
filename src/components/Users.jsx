import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/actions";
import Axios from "axios";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);

  const [user, setUser] = useState({});

  const getUser = async (id) => {
    const response = await Axios.get(`https://reqres.in/api/users/${id}`);
    setUser(response.data.data);
    console.log(response.data.data);
  };

  console.log("HI", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderUsers = () => {
    if (users.loading) {
      return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
          <h1 className=" text-3xl font-bold">Loading ...</h1>
        </div>
      );
    }
    return (
      <div className="h-screen flex flex-col justify-center items-center Pastel bg-gradient-to-tr from-violet-500 to-orange-300">
        {user.first_name ? (
          <div className="rounded-md flex flex-col justify-center items-center border-4 border-black w-80 h-80 p-4 m-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-gray-300 transition-all">
            <h1 className="font-bold text-2xl">
              {user.first_name + " " + user.last_name}
            </h1>
            <p className="font-semibold text-xl m-2">{user.email}</p>
            <img
              className="mt-4 h-40 w-40 object-fit rounded-full border-2 border-pink-300"
              src={user.avatar}
              alt=""
            />
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-3xl m-20">
              Hi, Click on any button to see the user's details.
            </h1>
          </div>
        )}
        <div className="flex justify-center items-center flex-wrap">
          {users.items.map((user) => {
            return (
              <button
                onClick={() => getUser(user.id)}
                className="rounded-md border-2 border-slate-900 text-gray-300 text-xl font-bold m-3 p-3 w-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:bg-gradient-to-l hover:transition-all focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 text-center transition-all duration-800 ease-in-out"
                key={user.id}
              >
                {user.id}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return <div>{renderUsers()}</div>;
};

export default Users;
