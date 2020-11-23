import Axios from "axios";
import React, { Component } from "react";
import { setErrors } from "./setErrors";
import {
  FormGroup,
  Jumbotron,
  Label,
  Input,
  Col,
  Container,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class formV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elaboracion: "",
      inicio: "",
      fin: "",
      estudiante: "",
      institucion: "",
      horas: "",
      estado: "",
      errors: {},
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validate = (
    elaboracion,
    inicio,
    fin,
    estudiante,
    institucion,
    horas,
    estado
  ) => {
    const errors = setErrors(
      elaboracion,
      inicio,
      fin,
      estudiante,
      institucion,
      horas,
      estado
    );
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === "");
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      elaboracion,
      inicio,
      fin,
      estudiante,
      institucion,
      horas,
      estado,
    } = this.state;
    if (
      this.validate(
        elaboracion,
        inicio,
        fin,
        estudiante,
        institucion,
        horas,
        estado
      )
    ) {
      const data = {
        elaboracion: elaboracion,
        inicio: inicio,
        fin: fin,
        estudiante: estudiante,
        institucion: institucion,
        horas: horas,
        estado: estado,
      };
      console.log(data);
      Axios.post("http://localhost:5000/posts/add", data).then((res) => {
        if (res.data.success) {
          alert("added");
          this.setState({
            elaboracion: "",
            inicio: "",
            fin: "",
            estudiante: "",
            institucion: "",
            horas: "",
            estado: "",
          });
        }
      });
    }
  };
  render() {
    return (
      <Container>
        <Jumbotron>
          <FormGroup row>
            <Label style={styles.azul} className="text-white" sm={12}>
              Reporte de actividades
            </Label>
          </FormGroup>

          <FormGroup row>
            <Label for="elaboracion" className="text-left" sm={2}>
              Proyecto
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                className="form-control"
                name="elaboracion"
                id="idelaboracion"
                placeholder=""
                value={this.state.elaboracion}
                onChange={this.handleInputChange}
              />
              {this.state.errors.elaboracion && (
                <div className="text-danger">
                  {this.state.errors.elaboracion}
                </div>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="inicio" className="text-left" sm={2}>
              Empresa
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                className="form-control"
                name="inicio"
                id="idinicio"
                placeholder=""
                value={this.state.inicio}
                onChange={this.handleInputChange}
              />
              {this.state.errors.inicio && (
                <div className="text-danger">{this.state.errors.inicio}</div>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="fin" className="text-left" sm={2}>
              Datos de contacto de la empresa
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                className="form-control"
                name="fin"
                id="idfin"
                placeholder=""
                value={this.state.fin}
                onChange={this.handleInputChange}
              />
              {this.state.errors.fin && (
                <div className="text-danger">{this.state.errors.fin}</div>
              )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label style={styles.azul} className="text-white" sm={12}>
              Reporte
            </Label>
          </FormGroup>

          <FormGroup row>
            <Label for="estudiante" className="text-left" sm={2}>
              Descripción de las actividades
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                className="form-control"
                name="estudiante"
                id="idestudiante"
                placeholder=""
                value={this.state.estudiante}
                onChange={this.handleInputChange}
              />
              {this.state.errors.estudiante && (
                <div className="text-danger">
                  {this.state.errors.estudiante}
                </div>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="institucion" className="text-left" sm={2}>
              Avances de las actividades
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                className="form-control"
                name="institucion"
                id="idinstitucion"
                placeholder=""
                value={this.state.institucion}
                onChange={this.handleInputChange}
              />
              {this.state.errors.institucion && (
                <div className="text-danger">
                  {this.state.errors.institucion}
                </div>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="estado" className="text-left" sm={2}>
              Dificultades presentadas
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                className="form-control"
                name="estado"
                id="idestado"
                placeholder=""
                value={this.state.estado}
                onChange={this.handleInputChange}
              />
              {this.state.errors.estado && (
                <div className="text-danger">{this.state.errors.estado}</div>
              )}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="horas" className="text-left" sm={2}>
              Comentarios para el asesor
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                className="form-control"
                name="horas"
                id="idhoras"
                placeholder=""
                value={this.state.horas}
                onChange={this.handleInputChange}
              />
              {this.state.errors.horas && (
                <div className="text-danger">{this.state.errors.horas}</div>
              )}
            </Col>
          </FormGroup>
          <Row>
            <Col sm={9}>
              <button
                type="submit"
                style={styles.btnCustom}
                className="btn text-center text-white"
                onClick={this.onSubmit}
              >
                {" "}
                Enviar
              </button>
            </Col>
            <Col>
              <Link to="/seeReports">
                <button
                  type="button"
                  style={styles.btnCustom}
                  className="btn text-center text-white"
                >
                  {" "}
                  Cancelar
                </button>
              </Link>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

const styles = {
  azul: {
    backgroundColor: "#0E153B",
    borderRadius: 20,
    fontSize: 26,
  },
  btnCustom: {
    position: "absolute",
    width: 120,
    height: 40,
    backgroundColor: "#0E153B",
    borderRadius: 14,
  },
};
