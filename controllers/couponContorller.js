const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongoDBId = require("../utils/validateMongoDB");

//create coupon
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const coupon = await Coupon.create(req.body);
    res.json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});

//get all coupon
const getAllCoupon = asyncHandler(async (req, res) => {
  try {
    const coupon = await Coupon.find();
    res.json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});

//update coupon

const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDBId(id);
  try {
    const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

//delete coupon

const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDBId(id);
  try {
    const deletedCoupon = await Coupon.findByIdAndDelete(id);
    res.json(deletedCoupon);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = { createCoupon, getAllCoupon, updateCoupon, deleteCoupon };
