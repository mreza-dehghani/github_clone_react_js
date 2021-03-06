import * as Card from '../../../../components/card';

export default props => {
	const { data } = props;
	return (
		<div className="mt-4">
			<Card.Card>
				<Card.Body>
					<div className="user-info-links">
						{data &&
							data.map((item, key) => {
								return (
									item.path && (
										<div className="user-info-link-item" key={key}>
											<span className="mr-2">{item.name}</span>
											{item.path.includes('https') ? (
												<a href={item.path} className="user-info-link-item-link" target="_blank">
													{item.path}
												</a>
											) : (
												<span className="user-info-link-item-link">{item.path}</span>
											)}
										</div>
									)
								);
							})}
					</div>
				</Card.Body>
			</Card.Card>
		</div>
	);
};
