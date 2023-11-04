import styles from './SearchForm.module.css';
import {useRef, useState} from 'react';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

function SearchForm() {

	const [searchRequest, setSearchRequest] = useState('');

	const inputRef = useRef();
	const btnRef = useRef();

	console.log(searchRequest);

	const search = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		setSearchRequest(formProps.search);
	};

	return (
		<>
			<form onSubmit={search} className={styles['search-form']}>
				<Input icon={true} ref={inputRef} placeholder={'Search'} name={styles['search']}/>
				<Button ref={btnRef}>Search</Button>
			</form>
		</>
	);
}

export default SearchForm;
