import styles from './Button.module.css';

function Button({children}) {

	return (
		<>
			<button className={styles['button--primary']}>{children}</button>
		</>
	);
}

export default Button;
