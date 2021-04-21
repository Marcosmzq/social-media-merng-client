import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_POST } from "../../graphql/mutations";

const EditPostInput = ({ postId, setActiveEditPost }) => {
  const [body, setBody] = useState("");
  const [updateNote, { error }] = useMutation(UPDATE_POST, {
    onError(err) {
      console.log(err);
      console.log(error);
    },
    variables: {
      newBody: body,
      postId,
    },
  });
  const handleChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = () => {
    updateNote();
    setActiveEditPost(false);
  };
  return (
    <div className="flex flex-col p-2 w-full border-2 border-sucess rounded-lg my-1">
      <textarea
        className="w-full p-2 my-1 border rounded focus:outline-none"
        type="text"
        placeholder="Edit post content"
        value={body}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="border-2 border-sucess rounded-lg bg-sucess focus:outline-none font-title font-bold text-1xl text-center text-whiteFade p-2 w-full sm:w-auto"
      >
        Save
      </button>
    </div>
  );
};
export default EditPostInput;
