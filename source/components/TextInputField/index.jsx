import { useState } from 'react'
import './styles.scss'
import * as validator from '../../utils/validator'

export default function TextInputField({
	placeholder = '',
	onChange = () => {},
	type = 'text',
	hasError = false,
}) {
	let debouceTimer = null
	const handleChangeEvent = ({ target: { value } }) => {
		clearTimeout(debouceTimer)
		debouceTimer = setTimeout(() => onChange(value), 400)
	}

	let cssClasses = ''
	if (hasError) cssClasses += 'error'

	return (
		<input
			className={cssClasses}
			type={type}
			placeholder={placeholder}
			onChange={handleChangeEvent}
		/>
	)
}

export function EmailInputField({ label = 'Email', onChange = () => {} }) {
	const [valid, setValidity] = useState(true)

	const handleChangeEvent = (value) => {
		const isEmailValid = validator.checkEmail(value)
		setValidity(isEmailValid)
		onChange(value)
	}

	return (
		<TextInputField
			placeholder={label}
			onChange={handleChangeEvent}
			type='email'
			hasError={!valid}
		/>
	)
}

export function PasswordInputField({
	label = 'Password',
	onChange = () => {},
}) {
	const [valid, setValidity] = useState(true)

	const handleChangeEvent = (value = '') => {
		setValidity(value.length >= 8)
		onChange(value)
	}

	return (
		<TextInputField
			placeholder={label}
			onChange={handleChangeEvent}
			type='password'
			hasError={!valid}
		/>
	)
}
