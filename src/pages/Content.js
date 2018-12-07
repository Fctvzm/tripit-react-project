import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import '../styles/Content.css'

import icon from "../img/mountains.svg"
import icon2 from "../img/trekking.svg"
import icon3 from "../img/stopwatch.svg"

var Trips = [
	{
		id: 0,
		name: 'Kok Zhailau',
		icon: 'https://arcticwild.com/wp-content/themes/arcticwild/assets/img/icon-raft.svg',
		img: 'https://arcticwild.com/wp-content/uploads/2014/11/Koyukuk-Alaska-Canoe_01.jpg',
		heigth: '3000 m',
		type: '',
		introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		duration: '1-2 hours',
		difficulty: 'meduim',
	},
	{
		id: 1,
		name: 'Kok Zhailau',
		icon: 'https://arcticwild.com/wp-content/themes/arcticwild/assets/img/icon-canoe.svg',
		img: 'https://arcticwild.com/wp-content/uploads/2014/11/Kongakut-Raft_02.jpg',
		heigth: '3000 m',
		type: '',
		introText: '',
		difficulty: 'meduim',

	},
	{
		id: 2,
		name: 'Kok Zhailau',
		icon: 'https://arcticwild.com/wp-content/themes/arcticwild/assets/img/icon-backpacking.svg',
		img: 'https://arcticwild.com/wp-content/uploads/2016/06/caribou-trail-sunset-pass-shaw.jpg',
		heigth: '3000 m',
		type: '',
		introText: '',
		difficulty: 'meduim',

	},
	{
		id: 3,
		name: 'Kok Zhailau',
		icon: 'https://arcticwild.com/wp-content/themes/arcticwild/assets/img/icon-basecamp.svg',
		img: 'https://arcticwild.com/wp-content/uploads/2017/04/Brooks-Range-and-Caribou-small.jpg',
		heigth: '3000 m',
		type: '',
		introText: '',
		difficulty: 'meduim',

	},
	{
		id: 4,
		name: 'Kok Zhailau',
		icon: 'https://arcticwild.com/wp-content/themes/arcticwild/assets/img/icon-backpacking.svg',
		img: 'https://arcticwild.com/wp-content/uploads/2014/01/CF6A5598-1024x587.jpg',
		heigth: '3000 m',
		type: '',
		introText: '',
		difficulty: 'meduim',

	},
]

export class Content extends Component {

	render(){
		const {id} = this.props.match.params;
		var trip = Trips[id];

		return(
			<div id="trip-detail">
				<Row className="trip-header">
					<Col className="trip-left" md={6} xs={12}>
						<h2>{trip.name}</h2>
						<div className="heading-sep"></div>
						<p>{trip.introText}</p>
					</Col>
					<Col className="trip-right" md={6} xs={12}>
						<div className="trip-image" style={{backgroundImage: `url(${trip.img})`}}></div>
					</Col>
				</Row>
				<Row className="trip-info">
					<Col md={12}>
						<Col md={4} className="trip-info-block">
							<img src={icon}/>
							<h3>Heigth</h3>
							{trip.heigth}
						</Col>
						<Col md={4} className="trip-info-block">
							<img src={icon2}/>
							<h3>Complication</h3>
							{trip.difficulty}
						</Col>
						<Col md={4} className="trip-info-block">
							<img src={icon3}/>
							<h3>Duration</h3>
							{trip.duration}
						</Col>
					</Col>
				</Row>
				<Row className="trip-gallery">
					<Col md = {12} className='viewmore'>
						<a href="#">View full gallery</a>
					</Col>
				</Row>
				<Row className="trip-fulldetail">
					<Col md={6} xs={12} className='trip-text'>
						<h2>Trip details</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Col>
					<Col md={6} xs={12} className="trip-map">
						<p>There shoudl be a map/route how to get to this place. But we add it soon, cheers!</p>
					</Col>
				</Row>
			</div>
		)
	}
}