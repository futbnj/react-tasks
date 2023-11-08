import styles from './SearchForm.module.css';
import {useState} from 'react';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

function SearchForm() {

	const [searchRequest, setSearchRequest] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		setSearchRequest(formProps.search);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={styles['search-form']}>
				<Input value={searchRequest} onChange={setSearchRequest} iconName={'search.svg'} placeholder={'Search'} name={'search'}/>
				<Button>Search</Button>
			</form>
		</>
	);
}

export default SearchForm;
