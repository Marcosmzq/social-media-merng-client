import { AuthProvider } from "../context/auth";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const httpLink = createHttpLink({
  uri: "https://social-media-merng-server.herokuapp.com/",
});
const authLink = setContext((_, { headers }) => {
  //TODO: Esto no esta funcionando bien. agregar más timepo de duracion para el token.
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("jwtToken");
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </ApolloProvider>
  );
}
export default MyApp;
