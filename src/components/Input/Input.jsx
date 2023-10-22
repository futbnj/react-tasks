import './Input.scss';

function Input({icon, name, placeholder = 'Enter text..'}) {

	return (
		<div className={'input-wrapper'}>
			{icon && (
				<img src="/search.svg" alt="Search" className={'input-icon'}/>
			)}
			<input className={'input'} name={name} placeholder={placeholder}/>
		</div>
	);
}

export default Input;
