import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Jumbotron } from 'react-bootstrap';

function Home() {
	return(
		<Row>
			<Col>
				<Jumbotron className='text-center'>
					<h1>Welcome to my reactive app</h1>
					<p>The button below will use React Router to direct the user to <code>/call</code>,<br />
					which in turn will load the relevant component without any requests being sent from the page.</p>
					
					<Link className='btn btn-info' to="call">JOIN</Link>
				</Jumbotron>
			</Col>
		</Row>
	);
}

export default Home;