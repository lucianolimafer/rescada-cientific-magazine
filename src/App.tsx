import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./context/AuthContext";
import { RouteConfig } from "./routes";
import { client } from "./services/client";

export function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <RouteConfig />
      </ApolloProvider>
    </AuthProvider>
  );
}
