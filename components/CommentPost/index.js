import Head from "next/head";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { COMMENT_POST } from "../../graphql/mutations";
import CommentCard from "../CommentCard";

const CommentPost = ({ user, commentsCount, comments, postId }) => {
  const [body, setBody] = useState("");
  const [viewComments, setViewComments] = useState(false);
  const [viewCreateComment, setViewCreateComment] = useState(false);
  const [addComment, { error }] = useMutation(COMMENT_POST, {
    onError(err) {
      console.log(err);
      console.log(error);
    },
    variables: {
      body,
      postId,
    },
  });
  const handleChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = () => {
    addComment();
    setBody("");
  };
  const handleViewComments = () => {
    setViewComments(!viewComments);
  };
  const handleViewCreateComment = () => {
    setBody("");
    setViewCreateComment(!viewCreateComment);
  };
  return (
    <div className="w-full m-1 p-2">
      <Head>
        {/*FONTAWESOME CDN*/}
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      <div className="w-full p-2 flex justify-between items-center">
        <button
          onClick={() => {
            handleViewComments();
            handleViewCreateComment();
          }}
          className="show-comment-interface duration-500 p-2 text-primary text-3xl font-bold cursor-pointer focus:outline-none"
        >
          <i className="fas fa-comments"></i>
        </button>
        <p className="p-2 my-1 text-primary font-bold font-title">
          {commentsCount} comments.
        </p>
      </div>

      {viewComments &&
        comments.map((comment) => {
          return (
            <CommentCard
              key={comment.id}
              comment={comment}
              user={user}
              postId={postId}
            />
          );
        })}
      {viewCreateComment && (
        <div className="p-2 my-2 w-full flex flex-col justify-center items-center font-body border-4 border-sucess rounded-xl shadow-md">
          <textarea
            type="text"
            placeholder="Write a comment."
            value={body}
            onChange={handleChange}
            className="p-2 my-1 w-full border-2 border-sucess rounded-lg focus:outline-none"
          />
          <button
            onClick={handleSubmit}
            className="p-2 w-full bg-sucess font-bold font-title rounded-lg text-white focus:outline-none cursor-pointer hover:bg-green-600"
          >
            Send
          </button>
        </div>
      )}
      <style jsx>{`
        .show-comment-interface:hover {
          transform: scale(1.5);
        }
      `}</style>
    </div>
  );
};

export default CommentPost;
