export default ({ data }) => {
	return (
		<div className="repository-main-branches">
			<b>Branches:</b>
			{data &&
				data.length !== 0 &&
				data.map((item, key) => {
					return (
						<div className="repository-main-branches-item" key={key}>
							<div className="with-three-dot">
								<b>{item.name}</b>
								<span className="ml-3 ">{item.commit.sha}</span>
							</div>
							<i
								className={`fa fa-${data.protected ? 'lock' : 'unlock'}`}
								title={data.protected ? 'protected' : 'not protected'}
							/>
						</div>
					);
				})}
		</div>
	);
};
