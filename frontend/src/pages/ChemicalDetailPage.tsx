import { useState } from "react";
import { useLocation } from 'react-router-dom'

interface IChemicalDetailPageProps {
}

const ChemicalDetailPage = (props: IChemicalDetailPageProps) => {
    const location = useLocation();
    const [id, setId] = useState(location.state.id === undefined ? -1 : location.state.id);
    console.log(props)

    return (
        <main>
            <h1 className="text-4xl font-semibold text-center">Chemical Detail Page: {id}</h1>
        </main>
    );
}
 
export default ChemicalDetailPage;