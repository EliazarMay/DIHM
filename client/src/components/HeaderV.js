import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./index.css";
import { Navbar, Col } from "reactstrap";

const HeaderV = (props) => {
  return (
    <Navbar style={styles.azul} dark expand="md">
      <Col md={4}>
        <Link to="/home">
          <img src={props.image} alt={props.title} />
        </Link>
      </Col>
      <Col md={2}>
        <Link to="/seeReports" className="text-white" style={styles.baseText}>
          REPORTES
        </Link>
      </Col>
      <Col md={4}>
        <Link to="/oferta" className="text-white" style={styles.baseText}>
          OFERTA DE PROYECTOS
        </Link>
      </Col>
      <Col md={2}>
        <Link to="/login" className="text-white" style={styles.baseText}>
          CERRAR SESIÓN
        </Link>
      </Col>
    </Navbar>
  );
};
export default HeaderV;

// codigo para ver los proyectos
//<link to="/seeProjects" className="btn btn-link text-white"> OFERTA DE PROYECTOS</link>

const styles = {
  azul: {
    backgroundColor: "#0E153B",
  },
  baseText: {
    fontWeight: "bold",
  },
};
