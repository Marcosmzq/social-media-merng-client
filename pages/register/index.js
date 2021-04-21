import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../graphql/mutations";
import { AuthContext } from "../../context/auth";
import LoadingSpinner from "../../components/LoadingSpinner";
import DisplayErrors from "../../components/DisplayErrors";

const RegisterPage = () => {
  const { user, login } = useContext(AuthContext);
  const router = useRouter();
  const [errors, setErrors] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [addUser, { loading, data }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      login(userData);
      router.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
  };
  if (data || user) {
    router.push("/");
  }
  return (
    <div className="mx-auto px-4 min-h-screen flex justify-center items-center  flex-col">
      <Head>
        <title>Register Page</title>
      </Head>
      {loading || data || user ? (
        <LoadingSpinner />
      ) : (
        <>
          <header>
            <h1 className="text-3xl text-center font-bold font-title text-rose my-3">
              Sign Up, It's free!
            </h1>
          </header>
          <form onSubmit={handleSubmit} className="sm:w-3/6 flex flex-col">
            <input
              type="text"
              name="username"
              placeholder="Your username"
              className="my-3 h-8 p-5 outline-none"
              value={values.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="my-3 h-8 p-5 outline-none"
              value={values.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="my-3 h-8 p-5 outline-none"
              value={values.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="my-3 h-8 p-5 outline-none"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <div className="w-full flex justify-center">
              <button className="btn">Sign Up</button>
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
export default RegisterPage;
