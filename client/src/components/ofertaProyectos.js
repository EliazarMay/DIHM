import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default class ofertaProyectos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios.get("http://localhost:5000/offers").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.posts,
        });
        console.log("post: ", this.state.posts);
      }
    });
  }
  render() {
    return (
      <div className="container m-5">
        <div className="title">Oferta de Proyectos</div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" className="campos">
                #
              </th>
              <th scope="col" className="campos">
                Proyecto
              </th>
              <th scope="col" className="campos">
                Descipcion
              </th>

              <th scope="col" className="campos">
                Espacios
              </th>
              <th scope="col" className="campos">
                Accion
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post, index) => (
              <tr>
                <th scope="row" className="campos">
                  {index}
                </th>
                <td className="campos">{post.proyecto}</td>
                <td className="campos">{post.descripcion}</td>
                <td className="campos">{post.cupo}</td>
                <td className="campos">
                  <button type="button" className="btn btn-success">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
