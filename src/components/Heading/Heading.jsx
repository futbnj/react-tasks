import './Heading.scss';

function Heading({size, children}) {

	switch (size) {
		case 'h1':
			return <h1>{children}</h1>;
		case 'h2':
			return <h2>{children}</h2>;
		default:
			return <></>;
	}
}

export default Heading;
