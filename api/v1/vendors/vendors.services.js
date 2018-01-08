const VendorModel = require('./vendors.entity');

const addNewVendor = function (newVendor, done) {
    let vendor = new VendorModel();
    vendor.name = newVendor.name;
    vendor.code = newVendor.code;
    vendor.contactEmail = newVendor.contactEmail;
    vendor.sellerRank = newVendor.sellerRank;


    vendor.save(function (err, savedDoc) {
        if (err) {
            console.error("Error in adding new product, ERROR::", err);
            done(err);
        } else {
            done(null, savedDoc);
            return
        }
    });
}

const getVendors = function (done) {
    let query = {};
    let fieldOptions = null;
    let page = 1;
    let limit = 10;

    VendorModel
        .find(query)
        .sort({ "addedOn": -1 })
        .select(fieldOptions)
        .skip((page > 0) ? limit * (page - 1) : 0)
        .limit(limit)
        .exec((err, colln) => {
            if (err) {
                console.error('Error in finding Vendor, ERROR::', err, ' queries for ', query);
                done(err);
                return;
            }
            done(null, colln);
        });
}

const findVendorByCode = function (vendorCode, done) {
    let vCode = vendorCode;
    if(typeof vendorCode==='object'){
        vCode = vendorCode.vendor
    }
    let query = {"code": vCode}
    VendorModel
    .findOne(query)
    .exec((err, res) => {
        if (err) {
            console.error('Error in finding Vendor, ERROR::', err, ' queries for ', query);
            done(err);
            return;
        }
        if(typeof vendorCode==='object'){
            vendorCode['vendorInfo'] = res;
            done(null, vendorCode);
        }else{
            done(null, res);
        }
    });
}


module.exports = {
    addNewVendor,
    getVendors,
    findVendorByCode
}