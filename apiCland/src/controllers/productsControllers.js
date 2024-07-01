const DB = require("../database/models");
const sequelize = require("sequelize");

const products = (req, res) => {
  DB.Product.findAll({
    include: [{ association: "categories" }],
  }).then((product) => {
    console.log(product);
    const countProducts = product.length;
    const products = product.map((product) => {
      console.log(product);
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.categories,
        detail: `http://localhost:3022/api/products/${product.id}`,
      };
    });
    DB.Product.findAll({
      attributes: [
        "categories_id",
        [sequelize.fn("COUNT", sequelize.col("categories_id")), "total"],
      ],
      group: ["categories_id"],
    }).then((productsByCategory) => {
      DB.Category.findAll()
        .then((categories) => {
          let totalCategories = [];
          for (let i = 0; i < productsByCategory.length; i++) {
            for (let j = 0; j < categories.length; j++) {
              if (productsByCategory[i].categories_id == categories[j].id) {
                totalCategories.push({
                  category: categories[j].name,
                  total: productsByCategory[i].get().total,
                });
              }
            }
          }
          return totalCategories;
        })
        .then((countByCategory) => {
          res.json({ countProducts, countByCategory, products });
        });
    });
  });
};
const product = (req, res) => {
  DB.Product.findByPk(req.params.id, {
    include: [{ association: "categories" }],
  }).then((product) => {
    res.json(product);
  });
};

const editProduct = (req, res) => {
  let newImage = req.file ? req.file.filename : "";
  if (newImage.length > 0) {
    image = `${req.protocol}://${req.get(
      "host"
    )}/images/productosDelivery/${newImage}`;
    DB.Category.findAll({
      where: { name: req.body.category },
    }).then((category) => {
      DB.Product.update(
        {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: image,
          categories_id: category[0].id,
        },
        {
          where: { id: req.body.id },
        }
      ).then((product) => {
        console.log(image);
        res.json(true);
      });
    });
  } else {
    DB.Category.findAll({
      where: { name: req.body.category },
    }).then((category) => {
      DB.Product.update(
        {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          categories_id: category[0].id,
        },
        {
          where: { id: req.body.id },
        }
      ).then((product) => {
        res.json(true);
      });
    });
  }
};

const createProduct = (req, res) => {
  let newImage = req.file ? req.file.filename : "";
  if (newImage.length > 0) {
    image = `${req.protocol}://${req.get(
      "host"
    )}/images/productosDelivery/${newImage}`;
    DB.Category.findAll({
      where: { name: req.body.category },
    }).then((category) => {
      DB.Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image,
        categories_id: category[0].id,
      }).then((product) => {
        res.json(true);
      });
    });
  }
};

const lastProduct = (req, res) => {
  DB.Product.findAll({
    limit: 1,
    order: [["id", "DESC"]],
  }).then((lastProducts) => {
    res.json(lastProducts);
  });
};

const detailProducts = (req, res) => {
  DB.Product.findAll({
    include: [{ association: "categories" }],
  }).then((lastProducts) => {
    res.json(lastProducts);
  });
};

const sales = (req, res) => {
  DB.DetailSale.findAll({
    attributes: [
      "product_id",
      [sequelize.fn("COUNT", sequelize.col("product_id")), "total_p"],
    ],
    group: ["product_id"],
  }).then((salesByProduct) => {
    const saleByProduct = salesByProduct;
    DB.DetailSale.findAll({
      attributes: [[sequelize.fn("COUNT", sequelize.col("*")), "total_sales"]],
    }).then((totalSales) => {
      res.json({ saleByProduct, totalSales });
    });
  });
};

module.exports = {
  products,
  product,
  editProduct,
  createProduct,
  lastProduct,
  detailProducts,
  sales,
};
