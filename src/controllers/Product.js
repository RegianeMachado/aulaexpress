const Product = {
  index(req, res) {
    res.status(200).json(['array de produtos', req.userId]);
  },
};

module.exports = Product;
