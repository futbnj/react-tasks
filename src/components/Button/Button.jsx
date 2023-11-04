import styles from './Button.module.css';
import {forwardRef} from 'react';

const Button = forwardRef(function Button({children, ...props}) {

	return (
		<>
			<button className={styles['button--primary']} {...props}>{children}</button>
		</>
	);
});

export default Button;
