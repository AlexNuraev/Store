
const Brand = require('./../Models/brandModel');
const APIFeatures = require('./../util/apiFeatures');

exports.getAllBrands = async (req, res) => {
    const apiFeatures = new APIFeatures(Brand.find(), req.query) //find
        .filter()
        .sort()
        .limitFields()
        .paginate();

    const brands = await apiFeatures.query;
    res.status(200).json({
        status: 'success',
        results: brands.length,
        data: {
            brands,
        },
    });
};

exports.updateBrand = async (req, res, next) => {
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!brand) return next(new AppError('The requested brand is not exist', 404));
    //here we update the doc into db
    res.status(200).json({
        status: 'success',
        data: {
            brand,
            message: 'brand has been updated',
        },
    });

};


exports.deleteBrand = (async (req, res) => {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) return next(new AppError('The requested brand is not exist', 404));
    res.status(200).json({
        status: 'success',
        data: null,
    });
});

exports.createBrand = (async (req, res) => {
    console.log(req.body);
    const newBrand = await Brand.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            brand: newBrand,
        },
    });
});