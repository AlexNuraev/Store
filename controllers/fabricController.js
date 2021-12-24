const Fabric = require('./../Models/fabricModel');
const APIFeatures = require('./../util/apiFeatures');

exports.getAllFabric = (async (req,res) => {
    const apiFeatures = new APIFeatures(Fabric.find(), req.query) //find
        .filter()
        .sort()
        .limitFields()
        .paginate();
    console.log(apiFeatures.query);

    const fabric = await apiFeatures.query;

    res.status(200).json({
        status: 'success',
        results: fabric.length,
        data: {
            fabric,
        },
    });
    // console.log('get all brands')
});

exports.createFabric = (async (req, res) => {
    console.log(req.body);
    const newFabric = await Fabric.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            fabric: newFabric,
        },
    });
});

exports.updateFabric = (async (req, res) => {
    const fabric = await Fabric.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!fabric) return next(new AppError('The requested fabric is not exist', 404));
    //here we update the doc into db
    res.status(200).json({
        status: 'success',
        data: {
            fabric,
            message: 'fabric has been updated',
        },
    });

});

exports.deleteFabric = (async (req, res) => {
    const fabric = await Fabric.findByIdAndDelete(req.params.id);
    if (!fabric) return next(new AppError('The requested fabric is not exist', 404));
    res.status(200).json({
        status: 'success',
        data: null,
    });
});
