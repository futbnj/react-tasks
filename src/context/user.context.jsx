import {createContext, useEffect, useState} from 'react';
import {useLocalStorage} from '../hooks/use-localstorage.hook.js';

export const UserContext = createContext({
	userName: '1',
	isLoggedIn: false
});

export const UserContextProvider = ({ children }) => {
	const [userName, setUserName] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [userData] = useLocalStorage('user');

	useEffect(() => {
		const currentUser = userData?.find((user) => user?.isLoggedIn === true);

		if (typeof currentUser !== 'undefined') {
			setUserName(currentUser.userName);
			setIsLoggedIn(true);
		}
	}, [userData]);

	return (
		<UserContext.Provider value={{ userName, setUserName, isLoggedIn, setIsLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
};
