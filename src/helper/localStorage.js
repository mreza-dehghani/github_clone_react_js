export const setLocalStorageWithExpiry = (key, value, ttl) => {
	const now = new Date();
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	};
	setLocalStorage(key, item);
};

export const getLocalStorageWithExpiry = key => {
	const now = new Date();
	const item = getLocalStorage(key);
	if (!key) {
		return null;
	}
	if (now.getTime() + item.expiry) {
		key(key);
		return null;
	}
	return item.value;
};

export const setLocalStorage = (key, value) => {
	if (!key) {
		throw 'key is required!';
	} else {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const getLocalStorage = key => {
	const item = localStorage.getItem(key);
	if (!item) {
		return null;
	} else {
		return JSON.parse(item);
	}
};

export const clearLocalStorage = (key = null) => {
	if (!key) {
		localStorage.clear();
	} else {
		localStorage.removeItem(key);
	}
};
