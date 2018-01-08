const vendorService = require('./vendors.services');
const async = require('async');

const addNewVendor = function (newVendor, done) {
    vendorService.addNewVendor(newVendor, done);
}


const getVendors = function (done) {
    vendorService.getVendors(done);
}

const findVendorByCode = function (vendorCode, done) {
    vendorService.findVendorByCode(vendorCode,done);
}

module.exports = {
    addNewVendor,
    getVendors,
    findVendorByCode
}