import Head from "next/head";
import moment from "moment";
import { useMutation } from "@apollo/client";
import { DELETE_COMMENT } from "../../graphql/mutations";

const CommentCard = ({ comment, user, postId }) => {
  const [deleteComment, { error }] = useMutation(DELETE_COMMENT, {
    onError(err) {
      console.log(err);
      console.log(error);
    },
    variables: {
      commentId: comment.id,
      postId,
    },
  });
  const handleDelete = () => {
    deleteComment();
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
      <div className="w-full p-4 my-1 border-2 border-info rounded-lg flex flex-col">
        <div className="text-primary p-1 font-title font-bold flex justify-between items-center w-full">
          <p>{comment.username}</p>
          <p>{moment(comment.createdAt).fromNow()}</p>
        </div>
        <p className="font-light font-body p-1 w-full break-words">
          {comment.body}
        </p>
        {user && user.username == comment.username ? (
          <button onClick={handleDelete} className="btn">
            <i className="fas fa-trash-alt"></i>
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CommentCard;
