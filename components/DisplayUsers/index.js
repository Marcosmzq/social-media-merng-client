import { useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../graphql/querys";
import { AuthContext } from "../../context/auth";
import CardUser from "../CardUser";
import LoadingSpinner from "../LoadingSpinner";

const DisplayUsers = () => {
  const { user } = useContext(AuthContext);
  const { loading, data, error } = useQuery(GET_ALL_USERS);
  if (error) {
    console.log(error);
  }
  return loading || !data ? (
    <div className="h-full w-full flex items-center justify-center">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="w-full sm:m-2">
      <h3 className="text-center my-2 font-title font-bold text-3xl text-primary">
        Users list
      </h3>
      <div className="w-full">
        {data &&
          data.getAllUsers.map((userMap) => {
            return (
              <CardUser
                key={userMap.id}
                userFromContext={user}
                userDesc={userMap.desc}
                userUsername={userMap.username}
                userEmail={userMap.email}
                userCreatedAt={userMap.createdAt}
              />
            );
          })}
      </div>
    </div>
  );
};
export default DisplayUsers;
