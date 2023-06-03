// Chemical Model
const Chemical = require('../models').chemicals;

const findAll = async () => {
    const result = await Chemical.findAll();
    return result;
};

const findById = async (pk) => {
    const result = await Chemical.findByPk(pk);
    return result;
};

const create = async (data) => {
    const result = await Chemical.create(data);
    return result;
};

// Can't Name it 'delete' since it's a reserved word :)
const destroy = async (pk) => {
    const result = await Chemical.destroy({
            where: {
                id: pk,
            },
        });
        return result;
}

module.exports = {
    findAll,
    findById,
    create,
    destroy,
}