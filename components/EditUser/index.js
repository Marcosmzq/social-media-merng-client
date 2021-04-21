import Head from "next/head";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_USER_DESC } from "../../graphql/mutations";
const EditUser = () => {
  const [activeEdit, setActiveEdit] = useState(false);
  const [desc, setDesc] = useState("");

  const [editUser, { error }] = useMutation(EDIT_USER_DESC, {
    onError(err) {
      console.log(err);
      console.log(error);
    },
    variables: {
      desc,
    },
  });
  const handleActiveEdit = () => {
    setActiveEdit(!activeEdit);
  };
  const handleTextArea = (e) => {
    setDesc(e.target.value);
  };
  const handleEditUser = () => {
    editUser();
    setActiveEdit(!activeEdit);
    setDesc("");
  };
  return (
    <>
      <Head>
        {/*FONTAWESOME CDN*/}
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      {activeEdit ? (
        <div className="w-full p-2 my-1 border-4 border-sucess rounded-xl flex flex-col">
          <textarea
            className="w-full p-2 my-2 border-2 border-sucess rounded-xl focus:outline-none"
            type="text"
            placeholder="Edit your description"
            value={desc}
            onChange={handleTextArea}
          />
          <button
            onClick={handleEditUser}
            className="p-2 w-full bg-sucess rounded-xl focus:outline-none font-title font-bold text-1xl text-center text-white  sm:w-auto hover:bg-green-600"
          >
            Save
          </button>
        </div>
      ) : (
        <button onClick={handleActiveEdit} className="btn">
          <i className="fas fa-edit"></i> Desc
        </button>
      )}
    </>
  );
};

export default EditUser;
