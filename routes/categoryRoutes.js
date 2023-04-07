const express = require("express");
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware.js");
const {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} = require("../controllers/categoryController.js");

const router = express.Router();


router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);


router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);


router.get("/get-category", categoryControlller);


router.get("/single-category/:slug", singleCategoryController);


router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

module.exports = router;