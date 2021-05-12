import { ToggleTheme, Wrapper } from '../../style';
import Checkbox from '../../../../../components/checkbox';

export default () => {
	return (
		<ToggleTheme>
			<div className="my-2">
				<b>
					<i className="fa fa-moon-o mr-2" />
					Dark mode is here!
				</b>
			</div>
			<p>Appearance to choose your theme preference.</p>
			<Checkbox name="theme" checked={true} onClickAction={() => console.log(true)} />
		</ToggleTheme>
	);
};
