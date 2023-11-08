import styles from './LoginForm.module.css';
import {useContext, useEffect, useRef, useState} from 'react';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import {UserContext} from '../../context/user.context.jsx';
import cn from 'classnames';

function LoginForm({userData, setUserData}) {
	const [userInput, setUserInput] = useState('');
	const [isUserValid, setIsUserValid] = useState(true);

	const {setUserName, setIsLoggedIn} = useContext(UserContext);

	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		updateUserData(formProps.userName);
	};

	const updateUserData = (userName) => {
		if (userData.some(user => user.userName === userName)) {
			setUserData([...userData.map(user => {
				return {
					...user,
					isLoggedIn: user.userName === userName
				};
			})]);
			setUserInput('');
			setUserName(userName);
			setIsLoggedIn(true);
		} else {
			inputRef.current.focus();
			setIsUserValid(false);
		}
	};

	useEffect(() => {
		let timerId;

		if (!isUserValid) {
			timerId = setTimeout(() => {
				setIsUserValid(true);
			}, [2000]);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [isUserValid]);

	return (
		<>
			<form onSubmit={handleSubmit} className={styles['search-form']}>
				<Input classNames={cn({[styles['invalid']]: !isUserValid})} ref={inputRef} value={userInput} onChange={setUserInput} iconName={'search.svg'} placeholder={'Search'} name={'userName'}/>
				<Button>Login</Button>
			</form>
		</>
	);
}

export default LoginForm;
