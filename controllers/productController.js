const Product = require('./../Models/productModel');
const APIFeatures = require('./../util/apiFeatures');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({ active: true }, { __v: 0 });
        res.status(200).json(products);  
    } catch (error) {
        return res.status(500).json({ message: 'Server Error' });
    }
}

exports.getProduct = (async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            product
        }
    })
})

exports.createProduct = async (req, res) => {
    try {
        const product = new Product({ ...req.body });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Server Error', error: error.message });
    }
};

exports.updateProduct = (async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runvalidators: true,
    })
    if (!product) return next(new AppError('The requested prodcut is missing', 404));
    res.status(200).json({
        status: 'success',
        data: {
            product,
            message: 'product has been updated'
        }
    })
})

exports.deleteProduct = (async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return next(new AppError('The product missing', 404));
    res.status(200).json({
        status: 'sucess',
        data: 'Product has been deleted'
    });
});
