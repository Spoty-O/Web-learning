import React from "react";
import { API } from "../services/APIService";

const User = () => {
  const { data } = API.useGetUsersQuery(1);
  return <div>{data && JSON.stringify(data)}</div>;
};

export default User;
