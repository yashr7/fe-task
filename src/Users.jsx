import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./actions";
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
      return <h1>Loading...</h1>;
    }
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        {user.first_name ? (
          <div className="flex flex-col justify-center items-center border-2 border-black w-4/5 h-4-5 p-4 m-4">
            <h1 className="font-bold text-2xl">
              {user.first_name + " " + user.last_name}
            </h1>
            <p className="font-semibold text-xl">{user.email}</p>
            <img className="mt-3" src={user.avatar} alt="" />
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-2xl m-20">
              Click on any button to see the user's details
            </h1>
          </div>
        )}
        <div className="flex justify-center items-center">
          {users.items.map((user) => {
            return (
              <button
                onClick={() => getUser(user.id)}
                className="border-2 border-black font-bold m-2 p-4 hover:border-red-500"
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
