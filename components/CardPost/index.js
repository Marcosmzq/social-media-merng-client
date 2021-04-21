import { useState } from "react";
import CommentPost from "../CommentPost";
import moment from "moment";
import LikePost from "../LikePost";
import DeletePost from "../DeletePost";
import EditPost from "../EditPost";
import EditPostInput from "../EditPostInput";

const Post = ({
  postAuthor,
  postBody,
  postId,
  commentsCount,
  comments,
  createdAt,
  likesCount,
  likes,
  user,
}) => {
  const [activeEditPost, setActiveEditPost] = useState(false);
  return (
    <div className="m-auto my-6 p-2 w-4/5 border-4 border-primary rounded-lg break-all shadow-2xl">
      <div className="p-2 w-full flex flex-col items-center sm:flex-row sm:justify-between">
        <h2 className="font-extrabold font-title text-1xl text-sucess">
          <span className="text-primary font-normal">Created by</span>{" "}
          {postAuthor}
        </h2>
        <p className="font-semibold text-primary font-title">
          {moment(createdAt).fromNow()}
        </p>
      </div>
      <div className="my-1 p-1 w-full">
        <p className="p-2 my-1 border-2 border-primary rounded-lg font-normal font-nunito">
          {postBody}
        </p>
      </div>
      {activeEditPost ? (
        <EditPostInput postId={postId} setActiveEditPost={setActiveEditPost} />
      ) : (
        ""
      )}
      <div className="w-full flex justify-around items-center">
        <LikePost
          postId={postId}
          likesCount={likesCount}
          user={user}
          postLikes={likes}
        />
        {user !== null && postAuthor == user.username ? (
          <>
            <DeletePost postId={postId} />
            <EditPost
              setActiveEditPost={setActiveEditPost}
              activeEditPost={activeEditPost}
            />
          </>
        ) : (
          ""
        )}
      </div>
      <CommentPost
        user={user}
        commentsCount={commentsCount}
        comments={comments}
        postId={postId}
      />
    </div>
  );
};
export default Post;
