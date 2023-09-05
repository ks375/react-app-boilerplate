import ThemeContextProvider from '../components/theme/ThemeContextProvider';
import RouteWrapper from './RouteWrapper';

function App () {
  return (
    <main>
      <ThemeContextProvider>
        <RouteWrapper />
      </ThemeContextProvider>
    </main>
  )
}

export default App;