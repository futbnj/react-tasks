import './SearchForm.scss';
import {useState} from 'react';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

function SearchForm() {

	const [searchRequest, setSearchRequest] = useState('');

	console.log(searchRequest);

	const search = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		setSearchRequest(formProps.search);
	};

	return (
		<>
			<form onSubmit={search} className={'search-form'}>
				<Input icon={true} placeholder={'Search'} name={'search'}/>
				<Button>Search</Button>
			</form>
		</>
	);
}

export default SearchForm;