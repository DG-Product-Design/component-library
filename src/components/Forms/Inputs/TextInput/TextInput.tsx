import classNames from 'classnames';
import React from 'react';

/**
 * 1) Even in the case of a single text field, 
 * 		we should wrap the <label> and <input> 
 * 		elements with the <form> element to allow 
 * 		screen readers to activate form filling mode
 * 2) When there is only one <input> element 
 * 		within the <form> element, we need to 
 * 		disable 'implicit submission', i.e. hitting
 * 		the Enter key 'submits' input value and 
 * 		resets it by reloading the page
*/

interface TextInputComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	labelClass?: string;
	parentClass?: string;
	inputClass?: string;
	placeholder?: string;
}

type PatternProps =
	| { enforcePattern?: false; pattern?: never; errorMessage?: string }
	| { enforcePattern?: true; pattern: string; errorMessage: string }


const TextInput = (props: TextInputComponentProps & PatternProps) => {
	const [userInput, setUserInput] = React.useState('');
	const [error, setError] = React.useState(false);
	const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const newValueIsValid = !event.target.validity.patternMismatch;
		if (error) {
			if (newValueIsValid) {
				setError(false);
			}
		}
		setUserInput(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
	};

	const enforcePatternOnBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
		if (event.target.validity.patternMismatch) {
			setError(true);
		}
	};

	return (
		<form className={classNames(props.parentClass && props.parentClass, 'w-full')} onSubmit={handleSubmit}>
			<label className={classNames(props.labelClass && props.labelClass, 'text-sm font-semibold mb-1 bold')}>{props.label}</label>
			<input
				{...props}
				id={props.id}
				type={props.type ? props.type : 'text'}
				className={classNames(props.inputClass && props.inputClass, error ? 'bg-red-100 border-red-200' : 'bg-white border-slate-300', 'form-input w-full border rounded-[2px] text-base font-base placeholder:text-slate-300 leading-6 py-[10px] px-4')}
				value={userInput}
				onChange={handleChange}
				onBlur={props.enforcePattern ? enforcePatternOnBlur : props.onBlur}
				pattern={props.pattern ? props.pattern : ''}
				ref={ref}
			/>

			{error && (
				<p className="text-red-200 text-caption ease-in transition-transform mt-1">
					{props.errorMessage}
				</p>
			)}
		</form>
	);
};

export default TextInput;