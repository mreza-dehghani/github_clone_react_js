import { Footer } from '../../style';
import { getYear } from '../../../../helper/date';

export default () => {
	return (
		<Footer>
			<i className="fa fa-github app-icon pointer" />
			<div className="copyright">
				<i className="fa fa-copyright mr-1" />
				{getYear()}
			</div>
		</Footer>
	);
};
