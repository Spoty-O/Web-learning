import React from "react";
import { API } from "../services/APIService";

const User = () => {
  const { data } = API.useGetUsersQuery(undefined);
  return (
    <div>
      {data && (
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-center">Id</th>
              <th className="text-center">Login</th>
              <th className="text-center">Email</th>
              <th className="text-center">Password</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {data.map((element) => {
              return (
                <tr>
                  <td className="text-center">{element.id}</td>
                  <td className="text-center">{element.login}</td>
                  <td className="text-center">{element.email}</td>
                  <td className="text-center">{element.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
