import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { InputBox } from './components/InputBox';
import { UserInfo } from './components/UserInfo';
import usePersistedState from './hooks/usePersistedState';
import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App = () => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header toggleTheme={toggleTheme} />
			<InputBox />
			<UserInfo />
		</ThemeProvider>
	);
};

export default App;
