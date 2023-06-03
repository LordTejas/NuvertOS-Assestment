const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { chemicalsService } = require("../services");


const getAllChemicals = catchAsync(async (req, res) => {
    const result = await chemicalsService.findAll();

    if (result.length === 0) {
        throw new ApiError(httpStatus.NOT_FOUND, "No Chemicals Found!");
    }

    res.status(httpStatus.OK).send(result);
});

const getChemicalById = catchAsync(async (req, res) => {
    const pk = req.params.chemicalId;
    const result = await chemicalsService.findById(pk);

    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "No Chemical Found!");
    }

    res.status(httpStatus.OK).send(result);
});

module.exports = {
    getAllChemicals,
    getChemicalById,
};