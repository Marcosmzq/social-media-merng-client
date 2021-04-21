import moment from "moment";
import EditUser from "../EditUser";

const CardUser = ({
  userDesc,
  userEmail,
  userCreatedAt,
  userUsername,
  userFromContext,
}) => {
  return (
    <div className="w-4/5 mx-auto my-2 p-2 border-4 border-primary rounded-lg flex flex-col break-words shadow-2xl">
      <div className="p-2 flex flex-col items-center justify-center sm:justify-between sm:flex-row">
        <h2 className="font-bold font-title text-1xl text-primary">
          {userUsername}
        </h2>
        <p className="font-bold text-primary text-1xl font-title">
          {moment(userCreatedAt).fromNow()}
        </p>
      </div>
      <div className="my-2 p-2">
        <h5 className="font-bold font-title text-1xl text-primary">
          Description
        </h5>
        <p className="font-body my-1">
          {userDesc == null ? `Hello! my name is ${userUsername}.` : userDesc}
        </p>
      </div>
      <p className="font-title text-info my-2 w-full text-center">
        {userEmail}
      </p>
      {/*If the user of the context (the one who logged in) is the same as the user that is mapped to the card, then a button will appear to edit its description. */}
      {userFromContext && userFromContext.username == userUsername ? (
        <EditUser />
      ) : (
        ""
      )}
    </div>
  );
};
export default CardUser;
