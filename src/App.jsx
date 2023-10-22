import './App.scss';
import Heading from './components/Heading/Heading.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import Button from './components/Button/Button.jsx';
import SearchForm from './components/SearchForm/SearchForm.jsx';

function App() {

	return (
		<>
			<Heading size={'h1'}>Search</Heading>
			<Heading size={'h2'}>Search</Heading>
			<Heading size={'h3'}>Search</Heading>
			<Heading size={'h4'}>Search</Heading>
			<Paragraph size={'large'}>Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
			<Paragraph size={'medium'}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<Button>Search</Button>
			<SearchForm />
		</>
	);
}

export default App;
