import TextInputField, {
	EmailInputField,
	PasswordInputField,
} from '../../components/TextInputField'
import './styles.scss'

export default function Home() {
	return (
		<main>
			<header>
				<h1>Home Page</h1>
				<span>The entry-point</span>
			</header>

			<hr />

			<section>
				<form>
					<TextInputField
						onChange={(text) => console.log('TextInputField', text)}
						placeholder='Full name'
					/>
					<EmailInputField
						onChange={(text) => console.log('TextInputField', text)}
					/>
					<PasswordInputField
						onChange={(text) => console.log('PasswordInputField', text)}
					/>
				</form>
			</section>
		</main>
	)
}
