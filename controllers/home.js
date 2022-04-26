const index = (req, res) => {
	const page = {
		title: "Home"
	};
	res.status(200).render('home', { 
		page: page
	});
};

const explanation = (req, res) => {
	const page = {
		title: "Explanation"
	};
	res.status(200).render('explanation', { 
		page: page
	});
};

module.exports = {
	index: index,
	explanation: explanation
};