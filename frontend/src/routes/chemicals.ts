import axios from 'axios';

const fetchChemicals = async () => {
    const data = await axios.get('http://localhost:8082/chemicals');

    if (data.status !== 200) {
        return [];
    }

    return data.data;
}

const fetchChemicalById = async (pk: number) => {
    const data = await axios.get(`http://localhost:8082/chemicals/${pk}`);

    if (data.status!== 200) {
        return null;
    }

    return data.data;
}

export {
    fetchChemicals,
    fetchChemicalById,
}