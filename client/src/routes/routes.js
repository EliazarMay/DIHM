import React, { Component } from "react";
import GetReports from "../components/getReports";
import { Switch, Route } from "react-router-dom";
import CreateReport from "../components/createReport";
import EditReport from "../components/editReport";
import DetailReport from "../components/DetailReport";
import OfertaProyectos from "../components/ofertaProyectos";
import Header from "../components/HeaderV";
import Footer from "../components/FooterV";
import Home from "../components/Home";

export default class routes extends Component {
  render() {
    return (
      <>
        <Header
          image="http://www.unicaribe.mx/theme/unicaribe-2018/img/logo-20-blanco.png"
          title="Sistema de servicio social"
        />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/oferta" component={OfertaProyectos} />
          <Route exact path="/seeReports" component={GetReports} />
          <Route path="/posts/:id" component={DetailReport} />
          <Route path="/add" component={CreateReport} />
          <Route path="/edit/:id" component={EditReport} />
        </Switch>
        <Footer />
      </>
    );
  }
}
