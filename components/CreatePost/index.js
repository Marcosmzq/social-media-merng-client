import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_NEW_POST } from "../../graphql/mutations";
import { GET_ALL_POSTS } from "../../graphql/querys";

const CreatePost = () => {
  const [activeCreatePost, setActiveCreatePost] = useState(false);
  const [values, setValues] = useState("");
  const [newPost] = useMutation(CREATE_NEW_POST, {
    update(proxy, result) {
      const data = proxy.readQuery({
        query: GET_ALL_POSTS,
      });
      proxy.writeQuery({
        query: GET_ALL_POSTS,
        data: {
          getAllPosts: [result.data.createPost, ...data.getAllPosts],
        },
      });
      setValues("");
    },
    onError(err) {
      console.log(err);
    },
    variables: {
      body: values,
    },
  });
  const handleChange = (e) => {
    setValues(e.target.value);
  };
  const handleCreatePost = (e) => {
    e.preventDefault();
    newPost();
    setActiveCreatePost(!activeCreatePost);
  };
  const handleActiveCreatePost = () => {
    setActiveCreatePost(!activeCreatePost);
  };
  return (
    <div className="w-4/5 mx-auto my-2 sm:w-full ">
      {activeCreatePost ? (
        <>
          <div className="p-2 w-full">
            <textarea
              name="newPost"
              placeholder="Write something"
              className="w-full p-1 h-44 focus:outline-none border-2  border-rose rounded"
              value={values}
              onChange={handleChange}
            ></textarea>
          </div>
          <button onClick={handleCreatePost} className="btn">
            Create
          </button>
        </>
      ) : (
        <button onClick={handleActiveCreatePost} className="btn">
          New post
        </button>
      )}
    </div>
  );
};
export default CreatePost;
