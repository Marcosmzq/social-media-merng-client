import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="w-11/12 m-auto my-1 p-2 border rounded bg-whiteFade flex justify-between items-center flex-wrap sm:px-4">
      <div className="w-full text-center sm:w-auto">
        <p className="font-bold font-title text-2xl text-rose cursor-pointer">
          <Link href="/">
            <a>{user ? user.username : "Social Media"}</a>
          </Link>
        </p>
      </div>
      <ul className="nav-ul">
        {user ? (
          <li className="nav-li">
            <button onClick={logout} className="focus:outline-none border-none">
              Logout
            </button>
          </li>
        ) : (
          <>
            <li className="nav-li">
              <Link href="/login">
                <a>Sign In</a>
              </Link>
            </li>
            <li className="nav-li">
              <Link href="/register">
                <a>Sign Up</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default NavBar;
