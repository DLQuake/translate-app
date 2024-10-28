import ThemeSwitcher from '@/components/ThemeSwitcher';
import TranslateForm from '../components/TranslateForm';

export default function Home() {
	return (
		<div className="hero">
			<div className="hero-body">
				<h1 className="title has-text-centered is-1">Translator App</h1>
				<ThemeSwitcher />
				<TranslateForm />
			</div>
		</div>
	);
}
