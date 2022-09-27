import React from 'react';
import Lottie from 'react-lottie';
import * as animation from './WelcomeLottieAnimation.json';

class WelcomeLottie extends React.Component {	
	render () {
		const lottieOptions = {
			loop: true,
			autoplay: true,
			animationData: animation,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
		};

		return (
			<div className="w-full">
				<Lottie
					options={lottieOptions}
					width={260}
					height={200}
				/>
			</div>
		);
	}
}

export default WelcomeLottie;