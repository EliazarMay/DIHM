import React from 'react';
import {Col, Container, Row} from "reactstrap"

const FooterV = props => {
    return (
        <Container>
            <footer style={styles.footer}>
                <Row>
                <Col md = {3}>
                <a href="http://www.unicaribe.mx/" className ="text-white"  >Universidad del caribe © 2020</a>
                </Col>
                <Col md = {3}>
                    <a href = "http://www.unicaribe.mx/ubicacion" className="text-white">
                    Ubicación
                    </a>
                </Col>
                <Col md = {3}> 
                    <img style={styles.logo} src = {props.image} alt ={props.title} />     
                </Col>
                <Col md = {3}>
                    <a href = "http://www.unicaribe.mx/transparencia/aviso-privacidad" className="text-white">
                    Aviso de privacidad
                    </a>
                </Col>
                </Row>
            </footer>
        </Container>
    )
}
export default FooterV;

const styles ={
    footer:{
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "#0E153B",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
    },
  }