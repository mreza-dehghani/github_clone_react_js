import { Footer } from '../../style';
import { getYear } from '../../../../helper/date';
import { History } from '../../../../helper/history';

export default () => {
	return (
		<Footer>
			<i className="fa fa-github app-icon pointer" onClick={() => History.push('/')} />
			<div className="copyright">
				<i className="fa fa-copyright mr-1" />
				{getYear()}
			</div>
		</Footer>
	);
};
