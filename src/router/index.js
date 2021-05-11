import { privateRoute } from './private';
import { publicRoute } from './public';
import { authRoute } from './auth';

export default [...authRoute, ...publicRoute, ...privateRoute];
