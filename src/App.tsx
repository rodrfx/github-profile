import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { UserContextProvider } from './context/UserContext';
import usePersistedState from './hooks/usePersistedState';
import { Coordinator } from './routes/Coordinator';
import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App = () => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	return (
		<UserContextProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<BrowserRouter>
					<Header toggleTheme={toggleTheme} />
					<Coordinator />
				</BrowserRouter>
			</ThemeProvider>
		</UserContextProvider>
	);
};

export default App;
