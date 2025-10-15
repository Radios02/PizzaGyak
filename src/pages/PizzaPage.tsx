import type { Pizza } from '../types/Pizza'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import apiClient from '../api/apiClient'
import { BECKEND_URL } from '../api/apiClient'

const PizzaPage = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState<Pizza>();

    useEffect(() => {
        const url = `/pizzak/${id}`;
        apiClient
            .get<Pizza>(url)
            .then((response) => setPizza(response.data))
            .catch((result) => console.error(result));
    }, [id]);

    return (
        <>
            {pizza ? (
                <div>
                    <h1>{pizza?.nev}</h1>
                    <h2>{pizza?.leiras}</h2>
                    <h2>{pizza?.ar}</h2>
                    <img src={`${BECKEND_URL}/kepek/${pizza?.imageUrl}`} width={500} />
                </div>
            ) : (
                <h1>Hibás ID</h1>
            )}
        </>
    );
};

export default PizzaPage;