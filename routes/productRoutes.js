const express = require("express");
const {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} = require("../controllers/productController.js");
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware.js");
//to accept form data using fs(file system)
const formidable = require("express-formidable");





const router = express.Router();


router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
 formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);


router.get("/get-product", getProductController);


router.get("/get-product/:slug", getSingleProductController);


router.get("/product-photo/:pid", productPhotoController);


router.delete("/delete-product/:pid", deleteProductController);


router.post("/product-filters", productFiltersController);


router.get("/product-count", productCountController);


router.get("/product-list/:page", productListController);


router.get("/search/:keyword", searchProductController);


router.get("/related-product/:pid/:cid", realtedProductController);


router.get("/product-category/:slug", productCategoryController);


router.get("/braintree/token", braintreeTokenController);


router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

module.exports = router;