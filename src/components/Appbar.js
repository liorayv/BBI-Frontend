import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Collapse, NavbarText } from 'reactstrap';
import '../App.css';

function ContainerOutsideExample() {
    return (
        <Navbar color="dark" light expand="md" className="mb-4">
            <Container className="d-flex justify-content-center">
                <Collapse navbar className="w-100 d-flex justify-content-center">
                    <NavbarText style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>
                        Top 3 Kategori & Jumlah Barang
                    </NavbarText>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default ContainerOutsideExample;
