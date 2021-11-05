const Shirt = require('./../Models/shirtModel');
const APIFeatures = require('./../util/apiFeatures');

exports.getAllShirts = (async (req, res) => {
    const apiFeatures = new APIFeatures(Shirt.find(), req.query) //find
        .filter()
        .sort()
        .limitFields()
        .paginate();
    console.log(apiFeatures.query);

    const shirts = await apiFeatures.query;

    res.status(200).json({
        status: 'success',
        results: shirts.length,
        data: {
            shirts,
        },
    });
    // console.log('get all brands')
});

exports.createShirt = (async (req, res) => {
    console.log(req.body);
    const newShirt = await Shirt.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            shirt: newShirt
        }
    })
})

exports.updateShirt = (async (req, res) => {
    const shirt = await Shirt.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!shirt) return next(new AppError('The requested shirt is not exist', 404));
    //here we update the doc into db
    res.status(200).json({
        status: 'success',
        data: {
            shirt,
            message: 'shirt has been updated',
        },
    });

});

exports.deleteShirt = (async (req, res) => {
    const shirt = await Shirt.findByIdAndDelete(req.params.id);
    if (!shirt) return next(new AppError('The requested shirt is not exist', 404));
    res.status(200).json({
        status: 'success',
        data: null,
    });
});