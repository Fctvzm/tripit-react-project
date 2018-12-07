import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import '../styles/Places.css'

var Trips = [
	{
		id: 0,
		name: 'Kok Zhailau',
		icon: 'https://arcticwild.com/wp-content/themes/arcticwild/assets/img/icon-raft.svg',
		img: 'https://arcticwild.com/wp-content/uploads/2014/11/Koyukuk-Alaska-Canoe_01.jpg',
		heigth: '3000 m',
		type: '',
	},
	{
		id: 1,
		name: 'Kok Zhailau',
		icon: 'https://arcticwild.com/wp-content/themes/arcticwild/assets/img/icon-canoe.svg',
		img: 'https://arcticwild.com/wp-content/uploads/2014/11/Kongakut-Raft_02.jpg',
		heigth: '3000 m',
		type: '',
	},
	{
		id: 2,
		name: 'Kok Zhailau',
		icon: 'https://arcticwild.com/wp-content/themes/arcticwild/assets/img/icon-backpacking.svg',
		img: 'https://arcticwild.com/wp-content/uploads/2016/06/caribou-trail-sunset-pass-shaw.jpg',
		heigth: '3000 m',
		type: '',
	},
	{
		id: 3,
		name: 'Kok Zhailau',
		icon: 'https://arcticwild.com/wp-content/themes/arcticwild/assets/img/icon-basecamp.svg',
		img: 'https://arcticwild.com/wp-content/uploads/2017/04/Brooks-Range-and-Caribou-small.jpg',
		heigth: '3000 m',
		type: '',
	},
	{
		id: 4,
		name: 'Kok Zhailau',
		icon: 'https://arcticwild.com/wp-content/themes/arcticwild/assets/img/icon-backpacking.svg',
		img: 'https://arcticwild.com/wp-content/uploads/2014/01/CF6A5598-1024x587.jpg',
		heigth: '3000 m',
		type: '',
	},
]

export class Places extends Component{

	createTripsGrid = (trip) => {
		return(
			<Col md={4} xs={12} className="trip-item"  
			onClick = {() => this.props.history.push(`/placeInfo/${trip.id}`)}
			key={trip.id} style={{backgroundImage: `url(${trip.img}})`}}>
				<div className="trip-icon">
					<a href="">
						<img src={trip.icon}/>
					</a>
				</div>
				<div className="trip-text">
					<div className="trip-sep"></div>
					{trip.name}
				</div>
				<div className="trip-heigth">{trip.heigth}</div>
			</Col>
		)
	}

    render(){
        return(
            <div id="places">
            	<Row className="trip-list-header">
            		<h2>Almaty Wild</h2>
            		<h1>Destinations</h1>
            	</Row>
            	<Row className="trip-list">
            		<Col md = {12} xs = {12} className="trip-list-title">
            			Trips
            			<a href="#">Filter by difficulty</a>
            			<a href="#">Filter by type</a>
            		</Col>
            		<Col md = {12} xs = {12} className="trip-list-tags">
            			{Trips.map(this.createTripsGrid)}
            		</Col>
            	</Row>
            </div>
        )
        
    }
}