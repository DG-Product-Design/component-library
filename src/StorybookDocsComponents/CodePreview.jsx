import React from 'react';
import tomorrowNightBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue';
import SyntaxHighlighter from 'react-syntax-highlighter';


const CodePreview = (props) => {
	const children = props.children;
	return (
		<SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
			{children}
		</SyntaxHighlighter>
	)
}

export default CodePreview;