import YouTubeIcon from '../assets/images/YouTubeIcon.png';

const Author = () => {
	return (
		<article className="creator">
			<section className="creatorAboutMe">
				<div>
					<h2>作った人について</h2>
					<h3>熊野クロウ Crow Kumano</h3>
				</div>
				<div className="creatorAboutMe-box">
					<img src={YouTubeIcon} alt="熊野クロウのアイコン" className="creatorAboutMeIcon" />
					<p className="creatorAboutMeParagraph">
						趣味はお絵かきと動画制作とプログラミング。<br />
						Vue.jsに憧れて、このwebアプリを作ってみました。<br />
						何よりメロディーレーンちゃんが大好きすぎる。<br />
						YouTubeのチャンネル登録やSNSのフォローお願いします！
					</p>
				</div>
				<div>
					<ul className="socialLinkEffect">
						<li>
							<a className="socialLinkEffectEach icon-youtube" href="https://www.youtube.com/@crow_k" target="_blank"
								rel="noopener noreferrer" title="YouTube熊野クロウチャンネル">
								{/* <fa :icon="{ prefix: 'fab', iconName: 'youtube' }" /> */}
								YouTube熊野クロウチャンネル
							</a>
						</li>
						<li>
							<a className="socialLinkEffectEach icon-instagram" href="https://www.instagram.com/crow_k/" target="_blank"
								rel="noopener noreferrer" title="instagram熊野クロウ">
								{/* <fa :icon="{ prefix: 'fab', iconName: 'instagram' }" /> */}
								instagram熊野クロウ
							</a>
						</li>
						<li>
							<a className="socialLinkEffectEach icon-twitter" href="https://twitter.com/shirokumanocrow" target="_blank"
								rel="noopener noreferrer" title="twitter熊野クロウ">
								{/* <fa :icon="{ prefix: 'fab', iconName: 'twitter' }" /> */}
								twitter熊野クロウ
							</a>
						</li>
						<li>
							<a href="https://linktr.ee/crow_k">linktree</a>
						</li>
					</ul>
				</div>
			</section>
		</article>
	)
}

export default Author