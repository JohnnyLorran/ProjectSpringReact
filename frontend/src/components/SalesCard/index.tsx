import NotificationButton from '../NotificationButton';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

        const datemin = minDate.toISOString().slice(0,10);
        const datemax = maxDate.toISOString().slice(0,10);


        axios.get(`${BASE_URL}/sales?minDate=${datemin}&maxDate=${datemax}`)
            .then(response => {
                setSales(response.data.content);
            })
    }, [minDate, maxDate]);

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-tittle">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show-992px">ID</th>
                                <th className="show-576px">Data</th>
                                <th>Vendedor</th>
                                <th className="show-992px">Visitas</th>
                                <th className="show-992px">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sales.map(saleItem => {
                                    return (
                                        <tr key={saleItem.id}>
                                            <td className="show-992px">{saleItem.id}</td>
                                            <td className="show-576px">{new Date(saleItem.date).toLocaleDateString()}</td>
                                            <td>{saleItem.sellerName}</td>
                                            <td className="show-992px">{saleItem.visited}</td>
                                            <td className="show-992px">{saleItem.deals}</td>
                                            <td>R$ {saleItem.amount.toFixed(2)}</td>
                                            <td>
                                                <div className="dsmeta-red-btn-container">
                                                    <NotificationButton saleId={saleItem.id}/>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
import { Sale } from '../../models/sale';

export default SalesCard