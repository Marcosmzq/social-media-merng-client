import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/mutations";
import { AuthContext } from "../../context/auth";
import LoadingSpinner from "../../components/LoadingSpinner";
import DisplayErrors from "../../components/DisplayErrors";

const LoginPage = () => {
  const router = useRouter();
  const { user, login } = useContext(AuthContext);
  const [errors, setErrors] = useState(false);
  const [values, setValues] = useState({
    password: "",
    username: "",
  });
  const [loginUser, { loading, data }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      login(userData);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  if (data || user) {
    router.push("/");
  }
  return (
    <div className="flex flex-col flex-wrap items-center justify-center h-screen">
      <Head>
        <title>Login Page</title>
      </Head>
      {loading || data || user ? (
        <LoadingSpinner />
      ) : (
        <>
          <header className="w-3/6 text-center font-bold font-title text-rose">
            <h1 className="text-3xl w-full my-2">Sign In</h1>
            <p className="text-warning text-sm">And enjoy!</p>
          </header>
          <form className="sm:w-3/6 flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              className="my-3 h-8 p-5 outline-none"
              value={values.username}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="my-3 h-8 p-5 outline-none"
              value={values.password}
              onChange={handleChange}
            />
            <div className="w-full flex justify-center">
              <button className="btn">Login</button>
            </div>
          </form>
          {errors && Object.keys(errors).length > 0 && (
            <DisplayErrors errors={errors} />
          )}
        </>
      )}
    </div>
  );
};
export default LoginPage;
