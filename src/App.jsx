import './App.scss';
import Heading from './components/Heading/Heading.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import SearchForm from './components/SearchForm/SearchForm.jsx';
import Header from './layout/Header/Header.jsx';
import Body from './layout/Body/Body.jsx';

function App() {

	return (
		<div className={'app'}>
			<Header />
			<Body>
				<Heading size={'h1'}>Search</Heading>
				<Paragraph size={'medium'}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
				<SearchForm />
			</Body>
		</div>
	);
}

export default App;
