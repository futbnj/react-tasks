import styles from './Input.module.css';
import {forwardRef} from 'react';

const Input = forwardRef(function Input({icon, name, placeholder = 'Enter text..', ...props}) {

	return (
		<div className={styles['input-wrapper']} {...props}>
			{icon && (
				<img src="/search.svg" alt="Search" className={styles['input-icon']}/>
			)}
			<input className={styles['input']} name={name} placeholder={placeholder}/>
		</div>
	);
});

export default Input;
