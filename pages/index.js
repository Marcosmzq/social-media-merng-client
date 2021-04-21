import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth";
import CreatePost from "../components/CreatePost";
import DisplayPost from "../components/DisplayPost";
import DisplayUsers from "../components/DisplayUsers";

export default function Home() {
  const [displayPostsOrUser, setDisplayPostsOrUser] = useState(false);
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const handleClick = () => {
    setDisplayPostsOrUser(!displayPostsOrUser);
  };
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);
  return (
    <>
      <Head>
        <title>Sociality</title>
      </Head>
      <div className="w-full min-h-screen flex flex-col flex-wrap sm:w-11/12 sm:m-auto sm:flex-nowrap sm:flex-row justify-around">
        <div className="w-full sm:w-1/5 sm:mx-2 sm:my-10">
          <CreatePost />
          <div className="w-4/5 mx-auto my-2 sm:w-full">
            <button onClick={handleClick} className="btn ">
              {!displayPostsOrUser ? "Users list" : "Post list"}
            </button>
          </div>
        </div>
        <div className="m-2 p-2 w-full sm:w-4/5">
          {displayPostsOrUser ? <DisplayUsers /> : <DisplayPost />}
        </div>
      </div>
    </>
  );
}
