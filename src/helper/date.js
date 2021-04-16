import moment from 'moment';

export const getDifferenceTimeFromNow = date => {
	const year = date?.substring(0, 4);
	const month = date?.substring(5, 7);
	const day = date?.substring(8, 10);
	const fullDate = `${year}-${month}-${day}`;
	return moment(fullDate).fromNow();
};

export const getDate = date => {
	const year = date?.substring(0, 4);
	const month = date?.substring(5, 7);
	const day = date?.substring(8, 10);
	return year && month && day ? `${year}-${month}-${day} ` : '---';
};

export const getFullDate = date => {
	const year = date?.substring(0, 4);
	const month = date?.substring(5, 7);
	const day = date?.substring(8, 10);
	const hour = date?.substring(11, 13);
	const min = date?.substring(14, 16);
	return year && month && day && hour && min ? `${year}-${month}-${day} ${hour} : ${min} ` : '---';
};
