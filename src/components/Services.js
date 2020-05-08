import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"free-cocktails",
                info:'Have a rejuvenated stay at Paradise Beach Resort with Free cocktails at your service.',

            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info:'Go adventurous, explore around and get the hiker out of you!',
                
            },
            {
                icon:<FaShuttleVan />,
                title:"Free Shuttle",
                info:'Your Comfort is our Priority. Our Shuttles will be at your service to help you have an effortless tour around the city',
                
            },
            {
                icon:<FaBeer />,
                title:"Strongest Beer",
                info:'What is a holiday without drinks? Our best quality beer will give you company to make your visit even more exciting!'
                
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
