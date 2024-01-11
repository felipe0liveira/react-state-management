export function checkEmail(email) {
	const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return regexEmail.test(email)
}
