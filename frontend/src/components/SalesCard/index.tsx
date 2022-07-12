import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-tittle">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-form-control" type="text" />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-form-control" type="text" />
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
                            <tr>
                                <td className="show-992px">#341</td>
                                <td className="show-576px">09/07/2022</td>
                                <td>Anakin</td>
                                <td className="show-992px">15</td>
                                <td className="show-992px">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show-992px">#345</td>
                                <td className="show-576px">09/07/2022</td>
                                <td>Johnny</td>
                                <td className="show-992px">16</td>
                                <td className="show-992px">12</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show-992px">#347</td>
                                <td className="show-576px">09/07/2022</td>
                                <td>Macena</td>
                                <td className="show-992px">16</td>
                                <td className="show-992px">12</td>
                                <td>R$ 52300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard