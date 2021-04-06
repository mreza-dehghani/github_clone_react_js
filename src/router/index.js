import { privateRoute } from './private';
import { publicRoute } from './public';

export default publicRoute.concat(privateRoute);
