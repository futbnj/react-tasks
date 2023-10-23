import './Paragraph.scss';
import classnames from 'classnames';

function Paragraph({size, children}) {

	return (
		<p
			className={classnames(
				{'text--24': size === 24},
				{'text--16': size === 16}
			)}
		>
			{children}
		</p>
	);
}

export default Paragraph;
