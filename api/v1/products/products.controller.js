const productService = require('./products.service');
const vendorCtrl = require('../vendors/vendors.controller');
const async = require('async');

const addNewProduct = function(newProduct, done) {
  productService.addNewProduct(newProduct, done);
}

const submitReview = function(productCode, reviewObj, done) {
	productService.submitNewReview(productCode, reviewObj, done);
}

const getProducts = function(done) {
  productService.getProducts(done);
}

const findProductByCode = function(productCode, done) {
	async.waterfall([
		productService.findProductByCode.bind(null, productCode),
		vendorCtrl.findVendorByCode
	], (err, result) => {
		done(null,result)
	});
}

module.exports = {
  addNewProduct,
  getProducts,
  submitReview,
  findProductByCode
}