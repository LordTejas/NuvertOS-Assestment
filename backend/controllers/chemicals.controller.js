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

const createChemical = catchAsync(async (req, res) => {
    const { name, description, image } = req.body;

    const chemical = await chemicalsService.create({
        name,
        description,
        image
    });

    res.status(httpStatus.CREATED).send(chemical);
})

const deleteChemical = catchAsync(async (req, res) => {
    const pk = req.params.chemicalId;

    const record = await chemicalsService.findById(pk);
    if (!record) {
        throw new ApiError(httpStatus.NOT_FOUND, "Chemical with id: " + pk + " not found!");
    }

    const chemical = await chemicalsService.destroy(pk);

    res.status(httpStatus.NO_CONTENT).send();
})

module.exports = {
    getAllChemicals,
    getChemicalById,
    createChemical,
    deleteChemical,
};
