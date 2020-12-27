'use strict';

module.exports = async (event) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify({ message: 'Updated Alarm Successfully' }),
	};
	return response;
};
