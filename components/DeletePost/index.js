import Head from "next/head";
import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../../graphql/mutations";
import { GET_ALL_POSTS } from "../../graphql/querys";

const DeletePost = ({ postId }) => {
  const [deletePost, { error }] = useMutation(DELETE_POST, {
    update(proxy, { data: { deletePost } }) {
      proxy.modify({
        fields: {
          getAllPosts(existingPosts = []) {
            const newCacheRef = proxy.writeQuery({
              data: deletePost,
              query: GET_ALL_POSTS,
            });
            return [...existingPosts, newCacheRef];
          },
        },
      });
    },
    onError(err) {
      console.log(err);
      console.log(error);
    },
    variables: {
      postId,
    },
  });
  const handleDelete = () => {
    deletePost();
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
      <button
        onClick={handleDelete}
        className="p-2 w-full border border-rose bg-whiteFade rounded focus:outline-none font-title font-extrabold text-1xl text-center text-rose hover:bg-rose hover:text-white"
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </>
  );
};

export default DeletePost;
