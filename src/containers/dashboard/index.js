import { useEffect } from 'react';
import { useParams } from 'react-router';

export default () => {
	const router = useParams();
	const username = router.username;

	useEffect(() => {
		// return fetch(`https://api.github.com/issues`)
		// 	.then(res => res.json())
		// 	.then(result => console.log(result));
	}, []);

	return <div>home {username}</div>;
};
