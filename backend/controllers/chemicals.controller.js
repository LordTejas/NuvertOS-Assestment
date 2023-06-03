import ApiError from "../utils/ApiError";
import httpStatus from 'httpStatus';
import catchAsync from "../utils/catchAsync";
const { chemicalService } = require("../services");


const getAllChemicals = catchAsync(async (res, req) => {
    const result = await chemicalService.findAll();

    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "No Chemicals Found!");
    }

    res.status(httpStatus.OK).send(result);
});

module.exports = {
    getAllChemicals,
};