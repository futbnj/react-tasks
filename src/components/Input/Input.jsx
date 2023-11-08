import styles from './Input.module.css';
import {forwardRef} from 'react';
import cn from 'classnames';

const Input = forwardRef(function Input({value, iconName, name, placeholder = 'Enter text..', onChange, classNames, ...props}, ref) {

	const handleChange = (e) => {
		onChange(e.target.value);
	};

	return (
		<div className={cn(styles['input-wrapper'], classNames)} {...props} >
			{iconName && (
				<img src={'/' + iconName} alt="Search" className={'input-icon'}/>
			)}
			<input className={styles['input']} ref={ref} value={value} onChange={handleChange} name={name} placeholder={placeholder}/>
		</div>
	);
});

export default Input;
