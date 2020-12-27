'use strict';

module.exports = async (event) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify({ message: 'Getting all alarms' }),
	};
	return response;
};

