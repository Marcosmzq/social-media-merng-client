import Head from "next/head";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LIKE_POST } from "../../graphql/mutations";

const Likes = ({ user, postId, likesCount, postLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId },
  });
  const handleLike = () => {
    likePost();
  };
  useEffect(() => {
    if (user && postLikes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, postLikes]);
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
      {!liked ? (
        <button
          onClick={handleLike}
          className="p-2 w-full border border-rose bg-whiteFade rounded focus:outline-none font-title font-extrabold text-1xl text-center text-rose"
        >
          <span>
            <i className="fas fa-heart"></i> {likesCount}
          </span>
        </button>
      ) : (
        <button
          onClick={handleLike}
          className="p-2 w-full border border-rose bg-rose rounded focus:outline-none font-title font-extrabold text-1xl text-center text-white"
        >
          <span>
            <i className="fas fa-heart"></i> {likesCount}
          </span>
        </button>
      )}
    </>
  );
};
export default Likes;
