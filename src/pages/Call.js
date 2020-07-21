import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap'
import Comments from '../components/Comments';

class Call extends React.Component {
	constructor() {
		super();

		this.state = {
			isCameraEnabled: false
		};

		this.video = React.createRef();
		this.canvas = React.createRef();
		this.context = null;
	}

	getCameraFeed = () => {
		navigator.mediaDevices
			.getUserMedia({ audio: true, video: true })
			.then((stream) => {
				console.log(stream);

				this.setState({ isCameraEnabled: true });

				this.video.current.srcObject = stream;
				this.context = this.canvas.current.getContext('2d');
			})
	}

	disableCamera = () => {
		this.setState({ isCameraEnabled: false });
		this.video.current.srcObject.getTracks().forEach(track => track.stop());
	};

	handleOnPlay = (e) => {
		const { clientWidth, clientHeight } = e.target;

		this.canvas.current.width = clientWidth;
		this.canvas.current.height = clientHeight;

		const step = () => {
			try {
				this.context.drawImage(this.video.current, 0, 0, clientWidth, clientHeight);
			} catch (e) {
				return new Error(e);
			}
			requestAnimationFrame(step);
		}
		requestAnimationFrame(step)
	};

	render() {
		return (
			<>
				<Row>
					<Col>
						<Jumbotron className='text-center'>
							<div>
								{!this.state.isCameraEnabled ?
									<Button variant='success' onClick={this.getCameraFeed}>Enable Camera</Button> :
									<Button variant='warning' onClick={this.disableCamera}>Disable Camera</Button>}
							</div>

							<Row>
								<Col lg={6}>
									<h3>Video Element</h3>
									<video  onPlay={this.handleOnPlay} ref={this.video} width='100%' height='auto' id='canvas' autoPlay></video>
									<p>This is a <code>video</code> element streaming directly from the webcam.</p>
								</Col>
								
								<Col lg={6}>
									<h3>Canvas Element</h3>
									<canvas ref={this.canvas} style={{ width: '100%', height: 'auto' }}></canvas>
									<p>This is a <code>canvas</code> element being recursively 'painted' to from the video.</p>
								</Col>
							</Row>
							
							<div>
								<Link to={process.env.PUBLIC_URL + '/'}>Back to Home</Link>
							</div>
						</Jumbotron>
					</Col>
				</Row>
				
				<Comments />
			</>
		);
	}
}

export default Call;