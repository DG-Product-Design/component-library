import React from 'react';
import PropTypes from 'prop-types';
import tomorrowNightBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue';
import SyntaxHighlighter from 'react-syntax-highlighter';


const CodePreview = (props) => {
	const children = props.children;
	return (
		<SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
			{children}
		</SyntaxHighlighter>
	);
};

CodePreview.propTypes = {
	children: PropTypes.any
};

export default CodePreview;