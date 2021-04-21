import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

const Footer = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="w-full p-4 bg-blackFade flex justify-center items-center">
      <div>
        <ul className="p-2 flex flex-col justify-around text-white font-title">
          {user ? (
            <>
              <li className="my-1 hover:text-rose">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="my-1 hover:text-rose">
                <button
                  onClick={logout}
                  className="focus:outline-none border-none"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="my-1 hover:text-rose">
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li className="my-1 hover:text-rose">
                <Link href="/register">
                  <a>Register</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Footer;
