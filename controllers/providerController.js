const Provider = require('./../Models/providerModel');
const APIFeatures = require('./../util/apiFeatures');

exports.getAllProviders = (async (req, res) => {
    const apiFeatures = new APIFeatures(Provider.find(), req.query) //find
        .filter()
        .sort()
        .limitFields()
        .paginate();
    console.log(apiFeatures.query);

    const providers = await apiFeatures.query;

    res.status(200).json({
        status: 'success',
        results: providers.length,
        data: {
            providers,
        },
    });
    // console.log('get all brands')
});

exports.createProvider = (async (req, res) => {
    console.log(req.body);
    const newProvider = await Provider.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            provider: newProvider,
        },
    });
});

exports.updateProvider = (async (req, res) => {
    const provider = await Provider.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!provider) return next(new AppError('The requested provider is not exist', 404));
    res.status(200).json({
        status: 'success',
        data: {
            provider,
            message: 'provider has been updated'
        }
    })
});

exports.deleteProvider = (async (req, res) => {
    const provider = await Provider.findByIdAndDelete(req.params.id);
    if (!provider) return next(new AppError('The provider is not exist', 404));
    res.status(200).json({
        status: 'success',
        data: 'Provider has been deleted',
    })
});
