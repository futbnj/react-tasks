import styles from './Paragraph.module.css';
import classnames from 'classnames';

function Paragraph({size, children}) {

	return (
		<p
			className={classnames(
				{[styles['text--24']]: size === 24},
				{[styles['text--16']]: size === 16}
			)}
		>
			{children}
		</p>
	);
}

export default Paragraph;
