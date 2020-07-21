import React from 'react';
import { Row, Col, Card, Alert } from 'react-bootstrap'

class Comments extends React.Component {
	constructor() {
		super();

		this.state = {
			comments: []
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					comments: data
				});
			});
	}

	render() {
		return (
			<>
			<Row>
				<Col>
					<h2>Comments:</h2>
					<Alert variant="info">
						These comments are loaded with the <code>componentDidMount</code> lifecycle method, which in turn fires off an AJAX <code>fetch</code> request to asynchronously get the comments, update <code>state</code>, and finally render each comment card.
					</Alert>
				</Col>
			</Row>
			
			<Row>
				{this.state.comments.map(comment => {
					return (
						<Col key={comment.id} md={12}>
							<Card>
								<Card.Body>
									<Card.Title>{comment.name}</Card.Title>
									<Card.Text>
										{comment.body}<br />
										Email: <a href={'mailto:' + comment.email} target='_blank' rel='noopener noreferrer'>{comment.email}</a>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
      </Row>
			</>
		);
	}
}

export default Comments;