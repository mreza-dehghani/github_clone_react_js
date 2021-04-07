import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Wrapper, Main, Sidebar } from './style';
import * as Card from '../../components/card';
import Button from '../../components/button';

export default () => {
	const router = useParams();
	const username = router.username;

	useEffect(() => {
		// return fetch(`https://api.github.com/issues`)
		// 	.then(res => res.json())
		// 	.then(result => console.log(result));
	}, []);

	return (
		<Wrapper>
			<Sidebar>
				<Card.Card>
					<Card.Header>
						<div className="user-info">
							<div className="user-info-header">
								<img src="" alt="avatar" className="user-info-avatar" />
								<div className="user-info-full-name">mohammadreza</div>
								<div className="user-info-user-name">username</div>
								<div className="user-info-user-bio">bio</div>
								<Button
									type="secondary-outline"
									size="sm"
									onClick={() => console.log(true)}
									classes="mt-3"
									loading={false}
								>
									Edit
								</Button>
							</div>
						</div>
					</Card.Header>
					<Card.Body>
						<div className="user-info-body">
							<div className="user-info-followers">
								<div>followers</div>
								<b>20</b>
							</div>
							<div className="user-info-followers">
								<div>following</div>
								<b>20</b>
							</div>
						</div>
					</Card.Body>
				</Card.Card>
			</Sidebar>
			<Main>{username}</Main>
		</Wrapper>
	);
};
