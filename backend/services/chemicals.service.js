const db = require('../models');
console.log(db);

// Chemical Model
const Chemical = db.sequelize.models.chemical;

const findAll = async () => {
    console.log(Chemical)
    const result = await Chemical.findAll({});
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