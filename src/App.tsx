import React from 'react';

function App() {
	return (
		<div className="w-screen h-screen flex items-center bg-gradient-to-r from-white to-[#9233ff]">
			<div className="mx-auto max-w-sm rounded-md bg-white shadow-2xl p-4">
				To properly run the Component Library app, open your console and run the following command inside <span className="whitespace-nowrap text-slate-600 font-semibold">/Workspaces/ComponentLibrary</span>:
				<div className="w-full bg-slate-600 text-green-200 font-fira rounded-md p-2 pl-4 mt-3">
					yarn storybook
				</div>
			</div>
		</div>
	);
}

export default App;
