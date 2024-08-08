import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import '../App.css';

function DarkExample() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/sales/get-all')
            .then(res => res.json())
            .then((result) => {
                setSales(result);
            }
            )
    }, [])


    return (
        <Container className="table-container">
            <Table striped bordered hover variant="dark" responsive="md" className="custom-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Kategori Barang</th>
                        <th>Jumlah Barang</th>
                        <th>Total Penjualan</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.id}</td>
                            <td>{sale.kategoriBarang}</td>
                            <td>{sale.jmlBarang}</td>
                            <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(sale.totalHargaTerjual)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default DarkExample;