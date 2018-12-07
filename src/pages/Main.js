import React, { Component } from 'react';
import '../styles/Main.css';
import {Row, Col, Image} from 'react-bootstrap';
import ModalVideo from 'react-modal-video'
//import '../node_modules/react-modal-video/scss/modal-video.scss';

import items from "../img/experience-items.png"
import im1 from "../img/overlayer1.png"
import im2 from "../img/overlayer2.png"
import im3 from "../img/overlayer3.png"


var Places = [
  {
    id: 0,
    name: 'Kok Zhailau',
    image: 'http://4travel.ge/wp-content/uploads/2015/10/6877286-mountain-landscape-wallpaper.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: im1,
  },
  {
    id: 1,
    name: 'Charyn Canyon',
    image: 'https://photos-b-kl.kcdn.kz/c/4b/846-articles-foto-5-1024768_.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: im2,
  },
  {
    id: 2,
    name: 'Kaindy',
    image: 'http://limon-tour.kz/wp-content/uploads/2016/04/%D0%9A%D0%9E%D0%9B%D0%AC%D0%A1%D0%90%D0%99-%D0%9A%D0%90%D0%99%D0%AB%D0%9D%D0%94%D0%AB-3.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    logo: im3,
  }
]

export class Main extends Component{

    constructor () {
      super()
      this.state = {
        isOpen: false
      }
    }

    openModal = () => {
      this.setState({isOpen: true})
    }


    createPlacesGrid = (place) => {
      var img = <div className="container-image" 
                onClick={() => this.props.history.push(`/placeInfo/${place.id}`)}> 
                  <Image className="main-image" src = {place.image}/>
                  <div className="middle">
                    <Image src = {place.logo}/>
                  </div>
                </div>
      var text = <div className="text">
                  <h1>{place.name}</h1>
                  <p>{place.text}</p>
                </div>
      var order = place.id % 2;
      return (
          <Row className="place" key = {place.id}>
            <Col md = {6} xs = {12} className="nopadding">
              {order == 0 ? img : text}
            </Col>
            <Col md = {6} xs = {12} className="nopadding">
              {order == 0 ? text : img}
            </Col>
          </Row>
        )
    }

    render(){
        return(
          <div id="main">
            <Row id="welcome">
              <h2>Enjoy the beauty & power of</h2>
              <h1>Almaty wild</h1>
              <div className="heading-sep"></div>
              <Col md={12} className="viewmore">
                <a href="#"><span>Explore Below</span></a>
              </Col>
            </Row>
            <Row id="experience">
              <Col md = {6} xs = {12} className="text">
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} 
                videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                <h2>Come and experience the</h2>
                <h1>Almaty Nature</h1>
                <div className="heading-sep"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'</p>
                <a href = "#" onClick={this.openModal}>Watch video</a>
              </Col>
              <Col md = {6} xs = {12} className="items">
                <Image src = {items}/>
              </Col>
            </Row>
            <Row id="feature-places">
              {Places.map(this.createPlacesGrid)}
            </Row>
          </div>
        )
    }
}

