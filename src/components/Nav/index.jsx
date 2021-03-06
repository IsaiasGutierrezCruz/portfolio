import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
	function handleOnClick(){
		const navList = document.getElementById('nav-list');
		navList.classList.toggle(Styles.blocks_nav_hamburguer)
	}
	return (
		<nav className={Styles.nav}>
			<a className={Styles.logolink} href="/">
				<img src="/assets/logo.svg" alt="Logo Isaias Gutierrez" className={Styles.monogram} />
			</a>
			<div className={Styles.blocks_nav} id="nav-list">
					<a className={Styles.link} href="/projects">
						Portfolio
					</a>
					<a className={Styles.link} href="/blog" >
						Blog
					</a>
					<a className={Styles.link} href="/about">
						About
					</a>
					<a className={Styles.link} href="/assets/GutierrezCruzAbelIsaiasCV.pdf" target="_blank">CV</a>
					<a className={Styles.social} href="https://twitter.com/isaias_gcruz">
						<svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
						</svg>
					</a>
					<a className={Styles.social} href="https://github.com/IsaiasGutierrezCruz">
						<svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
						</svg>
					</a>
					<a className={Styles.social} href="https://www.linkedin.com/in/abel-isa%C3%ADas-guti%C3%A9rrez-cruz-34532a205">
						<svg className={Styles.socialicon_small} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"> 
							<path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
						</svg>
					</a>
			</div>
			<button onClick={handleOnClick} className={Styles.menu_hamburguer}>
				<svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
					<path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
				</svg>
			</button>
		</nav>
	);
}
export default Nav;
