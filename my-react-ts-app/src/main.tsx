import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql/apolloClient.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
)
