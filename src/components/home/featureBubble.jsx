import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";

export default class FeatureBubble extends Component {
  render() {
    return (
      <Card className="featureBubble-card">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={this.props.linkPath}>
            <Button size="small" color="primary">
              Open
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}
