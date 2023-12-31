import './App.scss';
import Heading from './components/Heading/Heading.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import SearchForm from './components/SearchForm/SearchForm.jsx';
import Header from './layout/Header/Header.jsx';
import Body from './layout/Body/Body.jsx';
import Card from './components/Card/Card.jsx';
import CardList from './components/CardsWrapper/CardList.jsx';

const INITIAL_MOVIES = [
	{
		id: 1,
		title: 'Black Widow',
		image: 'Black_widow',
		rating: 324
	},
	{
		id: 2,
		title: 'Shang Chi',
		image: 'Shang_chi',
		rating: 324
	},
	{
		id: 3,
		title: 'Loki',
		image: 'Loki',
		rating: 324
	}
];

function App() {

	return (
		<div className={'app'}>
			<Header />
			<Body>
				<Heading size={'h1'}>Search</Heading>
				<Paragraph size={'medium'}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
				<SearchForm />
				<CardList>
					{INITIAL_MOVIES.map(movie => (
						<Card key={movie.id} title={movie.title} imageTitle={movie.image} rating={movie.rating}/>
					))}
				</CardList>
			</Body>
		</div>
	);
}

export default App;
