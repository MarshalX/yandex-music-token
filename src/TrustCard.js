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
                    <div className="card-title text-center h5" style={{fontSize: "1.15rem"}}>{this.props.title}</div>
                    <Card.Text className="text-center">{this.props.text}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

TrustCard.defaultProps = {
    size: '7x'
};

export default TrustCard;
