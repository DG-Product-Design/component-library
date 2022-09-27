import React from 'react';
import classNames from 'classnames';

interface RenderPreviewProps {
	className?: string,
	dark?: boolean,
	children: React.ReactNode,
	overflow?: string,
}

const RenderPreview = (props: RenderPreviewProps) => {
	return (
		<div className={classNames(props.className && props.className, props.dark ? "bg-slate-600 text-white" : "bg-[linear-gradient(172deg,#fff,#fff7ef)]", "flex flex-1 relative rounded-xl shadow-inner-alt overflow-hidden border border-slate-200 w-auto")}>
			<div className={classNames(props.dark && "bg-grid--dark", "absolute inset-0 bg-grid [mask-image:linear-gradient(0deg,#fff,#FFE5D1)]")}></div>
			<div className={classNames(props.overflow ? props.overflow : 'overflow-auto', 'relative rounded-xl p-8 mx-auto')}>
				{props.children}
			</div>
		</div>
	)
}

export default RenderPreview;
