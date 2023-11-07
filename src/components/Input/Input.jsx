import './Input.scss';

function Input({value, iconName, name, placeholder = 'Enter text..', onChange, ...props}) {

	const handleChange = (e) => {
		onChange(e.target.value);
	};

	return (
		<div className={'input-wrapper'} {...props}>
			{iconName && (
				<img src={'/' + iconName} alt="Search" className={'input-icon'}/>
			)}
			<input className={'input'} value={value} onChange={handleChange} name={name} placeholder={placeholder}/>
		</div>
	);
}

export default Input;
