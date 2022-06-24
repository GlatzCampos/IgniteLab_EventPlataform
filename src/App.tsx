import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function app(){
  return(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
    
  )
}

export default app
