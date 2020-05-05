import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

class TrustCard extends React.Component {
    render() {
        return (
            <Card className="mb-4">
                <Card.Header className="text-center">
                    <FontAwesomeIcon size={this.props.size} icon={this.props.icon} />
                </Card.Header>

                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

TrustCard.defaultProps = {
    size: '7x'
};

export default TrustCard;
