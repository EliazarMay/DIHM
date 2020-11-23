import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

export default class detailReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:5000/posts/detail/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });
      }
      console.log("post: ", this.state.post);
    });
  }

  render() {
    const {
      elaboracion,
      inicio,
      fin,
      estudiante,
      institucion,
      horas,
      estado,
    } = this.state.post;
    return (
      <div className="container">
        <dl className="row">
          <dt className="col-sm-3">Proyecto</dt>
          <dd className="col-sm-9">{elaboracion}</dd>
          <dt className="col-sm-3">Empresa</dt>
          <dd className="col-sm-9">{inicio}</dd>
          <dt className="col-sm-3">Datos de contacto de la empresa</dt>
          <dd className="col-sm-9">{fin}</dd>
          <dt className="col-sm-3">Descripcion de las actividades</dt>
          <dd className="col-sm-9">{estudiante}</dd>
          <dt className="col-sm-3">Avances de las actividades</dt>
          <dd className="col-sm-9">{institucion}</dd>
          <dt className="col-sm-3">Dificultades presentadas</dt>
          <dd className="col-sm-9">{estado}</dd>
          <dt className="col-sm-3">Comentarios para el asesor</dt>
          <dd className="col-sm-9">{horas}</dd>
        </dl>
        <Link to="/seeReports">
          <button type="submit" className="btn btn-primary">
            Regresar
          </button>
        </Link>
      </div>
    );
  }
}
