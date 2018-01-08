let config = {
	MONGO: {
		MONGO_URL: (process.env.MONGO_URL || 'mongodb://localhost:27017/products')
	}
}
console.log('TestT')
module.exports = config;