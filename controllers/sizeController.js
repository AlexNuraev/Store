const Size = require('./../Models/sizeModel');
const APIFeatures = require('./../util/apiFeatures');

exports.getAllSize = async (req, res) => {
    const apiFeatures = new APIFeatures(Size.find(), req.query) //find
        .filter()
        .sort()
        .limitFields()
        .paginate();
    console.log(apiFeatures.query);

    const size = await apiFeatures.query;

    res.status(200).json({
        status: 'success',
        results: size.length,
        data: {
            size,
        },
    });
    // console.log('get all brands')
};

exports.updateShirt = async(req, res, next) => {
    const size = await Size.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!size) return next(new AppError('The requested size is not exist', 404));
    //here we update the doc into db
    res.status(200).json({
        status: 'success',
        data: {
            size,
            message: 'size has been updated',
        },
    });

};

exports.deleteShirt = (async (req, res) => {
    const size = await Size.findByIdAndDelete(req.params.id);
    if (!size) return next(new AppError('The requested size is not exist', 404));
    res.status(200).json({
        status: 'success',
        data: null,
    });
});

exports.createSize = (async (req, res) => {
    console.log(req.body);
    const newSize = await Size.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            size: newSize,
        },
    });
});