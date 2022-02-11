import { h } from 'preact';
import Styles from './styles.module.scss';

function Highlight({ children }) {
	return <span className={Styles.highlightStyle}>{children}</span>;
}

export default Highlight;