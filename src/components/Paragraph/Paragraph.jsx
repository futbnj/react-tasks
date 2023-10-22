import './Paragraph.scss';
import classnames from 'classnames';

function Paragraph({size, children}) {

	return (
		<p
			className={classnames(
				{'text--large': size === 'large'},
				{'text--medium': size === 'medium'}
			)}
		>
			{children}
		</p>
	);
}

export default Paragraph;
