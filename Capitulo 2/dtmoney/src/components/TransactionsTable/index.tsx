import { useEffect } from "react";
import {Container} from "./styles";
import api from "../../services/api"
export function TransactionsTable(){

    useEffect(() => {
       api.get('transactions')
       .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>Desenvolvimento de site</td>
                        <td className="withdraw">- R$ 1000,00</td>
                        <td>Desenvolvimento</td>
                        <td>01/09/2021</td>
                    </tr>
                    <tr >
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 1000,00</td>
                        <td>Casa</td>
                        <td>20/10/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}