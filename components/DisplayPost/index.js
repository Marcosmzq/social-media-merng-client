import CardPost from "../CardPost";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../graphql/querys";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import LoadingSpinner from "../LoadingSpinner";

const DisplayPost = () => {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(GET_ALL_POSTS);
  return loading || !data ? (
    <div className="h-full w-full flex justify-center items-center">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="w-full sm:m-2">
      <h3 className="text-center my-2 font-title font-bold text-3xl text-primary">
        Posts
      </h3>
      <div className="w-full">
        {data &&
          data.getAllPosts.map((post) => {
            return (
              <CardPost
                key={post.id}
                postId={post.id}
                postBody={post.body}
                postAuthor={post.username}
                commentsCount={post.commentCount}
                comments={post.comments}
                createdAt={post.createdAt}
                likesCount={post.likeCount}
                likes={post.likes}
                user={user}
              />
            );
          })}
      </div>
    </div>
  );
};
export default DisplayPost;
