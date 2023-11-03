import styles from './Input.module.css';

function Input({icon, name, placeholder = 'Enter text..'}) {

	return (
		<div className={styles['input-wrapper']}>
			{icon && (
				<img src="/search.svg" alt="Search" className={styles['input-icon']}/>
			)}
			<input className={styles['input']} name={name} placeholder={placeholder}/>
		</div>
	);
}

export default Input;
