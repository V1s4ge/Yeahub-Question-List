const getPages = (total) => {
	const pages = [];

	if (total <= 6) {
		return Array.from({ length: total }, (_, i) => i + 1);
	}

	for (let i = 1; i <= 6; i++) {
		pages.push(i);
	}

	pages.push('...');
	pages.push(total);

	return pages;
};

export default getPages;