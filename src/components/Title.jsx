import titleImg from '../assets/HowManyMelodyLaneTitleImage.svg';
import titleImgMelo from '../assets/images/MelodyLaneTitle.png';

const Title = () => {
	return (
		<head className="title">
			<h1 className="fallInTitle">
				<img src={titleImg} alt="それって何メロディーレーン？" className='titleImage'/>
			</h1>
			<div className='titleIllust'>
				<img src={titleImgMelo} alt="降ってくるメロディーレーン" className='fallInIllust'/>
			</div>
		</head>
	);
}

export default Title;