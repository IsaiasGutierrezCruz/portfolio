import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Isaías Gutiérrez
			<small className={Styles.byline}>🚀 Created with Astro</small>
		</footer>
	);
}
export default Footer;
