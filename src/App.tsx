import { ApolloProvider } from "@apollo/client";
import { RouteConfig } from "./routes";
import { client } from "./services/client";

export function App() {
  return (
    <ApolloProvider client={client}>
      <RouteConfig />
    </ApolloProvider>
  );
}
