import { h } from 'preact';
import Styles from './styles.module.scss';

function PostPreview({ post }) {
	return (
		<div className={Styles.card}>
			<div className={Styles.titleCard} style={`background-image:url(${post.img})`}>
				<h1 className={Styles.title}>{post.title}</h1>
			</div>
			<div className="pa3">
				<p className={`${Styles.desc} mt0 mb2`}>{post.description}</p>
				<div className={Styles.tags}>
					Tagged:
					{post.tags.map((t) => (
						<div className={Styles.tag} data-tag={t}>
							{t}
						</div>
					))}
				</div>
				<a className={Styles.link} href={post.url}>
					<span className={Styles.linkInner}>View</span>
				</a>
			</div>
		</div>
	);
}

export default PostPreview;
