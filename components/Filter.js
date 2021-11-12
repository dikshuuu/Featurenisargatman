import React, { Component } from "react";
import { Card, CardImg, ButtonGroup, Button,CardBody,CardTitle } from "reactstrap";

class Filter extends Component {
  render() {
    const card = this.props.cards
      .filter(({ type }) => {
        return !this.props.filter || type === this.props.filter;
      })
      .map(card => {
        return (
          <div
            key={Math.random()
              .toString(36)
              .slice(2)}
            className="col-2 m-1"
          >
            <Card onClick={() => this.props.cardSelect(card.id)}>
              <CardImg src={card.image} alt={card.name} />
              <CardBody>
              <CardTitle>{card.name}</CardTitle>
          </CardBody>
            </Card>
          </div>
        );
      });

    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex align-content-start flex-wrap">{card}</div>
          <div className="p-5 col-1">
          </div>
        </div>
      </div>
    );
  }
}
export default Filter;
