export const getPercent = (value, total) => {
	let totalCount = 0;
	if (total instanceof Array) {
		totalCount = total.reduce((a, b) => a + b);
	} else {
		totalCount = total;
	}
	return Math.round((value * 100) / totalCount);
};
