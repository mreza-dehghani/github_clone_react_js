import Button from '../../../../components/button';

export default ({ defaultBranch, branches, toggleBranches, toggleCloneCode }) => {
	return (
		<div className="d-flex justify-content-between align-items-center">
			<div className="d-flex justify-content-start align-items-center">
				<Button type="secondary-outline" size="sm" onClick={toggleBranches} loading={false}>
					<div className="d-flex justify-content-center align-items-center w-100">
						<i className="fa fa-code-fork mr-1" />
						<b>{defaultBranch}</b>
					</div>
				</Button>
				<div className="d-flex justify-content-between align-items-center ml-3">
					<div onClick={toggleBranches}>
						<i className="fa fa-code-fork mr-1" />
						<b>{branches && branches.length}</b>
						<span className="ml-1">branches</span>
					</div>
				</div>
			</div>
			<Button type="success" size="sm" onClick={toggleCloneCode} classes="ml-2" loading={false}>
				<div className="d-flex justify-content-center align-items-center w-100">
					<i className="fa fa-arrow-down mr-1" />
					<b>Code</b>
				</div>
			</Button>
		</div>
	);
};
