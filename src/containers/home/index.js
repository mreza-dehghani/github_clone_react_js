import { Main } from './style';
import earthImg from '../../assets/img/earth.svg';
import Button from '../../components/button';
import { History } from '../../helper/history';

export default () => {
	return (
		<div className="container pt-5">
			<Main>
				<div className="main-description">
					<div className="main-description-title">Where the world builds software</div>
					<div className="main-description-text mt-3">
						Millions of developers and companies build, ship, and maintain their software on GitHub the largest and most
						advanced development platform in the world.
					</div>
					<Button type="success" size="md" onClick={() => History.push('/login')} classes="mt-4">
						Sign In
					</Button>
				</div>
				<div className="w-50 d-lg-block d-none">
					<img src={earthImg} alt="" className="w-100" />
				</div>
			</Main>
		</div>
	);
};
