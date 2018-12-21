exports.handler = (event, ctx, cb) => {
	console.log(event, ctx);
	switch (event.httpMethod) {
		case "GET":
			getHandler(event, ctx, cb);
			break;
		case "POST":
			postHandler(event, ctx, cb);
			break;
		default: 
			break;
	}
}

function postHandler(){};
function getHandler(e, c, cb) {

	cb(null, {
		statusCode: 301,
		body: '',
		headers: {
			Location: 'http://www.google.com'
		}
	});
};