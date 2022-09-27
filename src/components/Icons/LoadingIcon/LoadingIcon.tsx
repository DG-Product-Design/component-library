import React from 'react'
import classNames from 'classnames'
import Lottie from 'react-lottie'
import LoadingAnimation from './LoadingAnimation.json'

const LoadingIcon = (props: {
	iconColor?: string;
	className?: string;
	height?: number;
	width?: number;
}) => {
	// colors need to be in color/255 format
	const orangeIconColor = [0.917647059, 0.439215686, 0.105999995213, 1];  // #EA701B (Orange 300/Primary)
	const greenIconColor = [0, 0.321568627, 0.301960784, 1];  // #00524D (Secondary/Green 400)
	const whiteIconColor = [1, 1, 1, 1];  // #FFFFFF (White)

	// Prevent modification of global LoadingAnimation by creating a deep copy
	const LoadingAnimationStringified = JSON.stringify(LoadingAnimation);
	
	const LoadingAnimationDeepCopy = JSON.parse(LoadingAnimationStringified);

	if (props.iconColor === 'white') {
		LoadingAnimationDeepCopy.layers[1].shapes[0].it[3].c.k = whiteIconColor
	} else if (props.iconColor === 'green') {
		LoadingAnimationDeepCopy.layers[1].shapes[0].it[3].c.k = greenIconColor
	} else if (!props.iconColor || props.iconColor === 'orange') {
		LoadingAnimationDeepCopy.layers[1].shapes[0].it[3].c.k = orangeIconColor
	};

	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: LoadingAnimationDeepCopy,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return ( 
		<div className={classNames(props.className && props.className)}>
			<Lottie
				options={lottieOptions}
				height={props.height ? props.height : 50}
				width={props.width ? props.width : 50}
			/>
		</div>
	)
}

export default LoadingIcon