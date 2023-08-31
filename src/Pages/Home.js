import React from 'react';
import TopicBox from '../Components/TopicBox';
import { Link } from "react-router-dom";




export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TopicBox food="Rice"/>
      <TopicBox food="chicken"/>
      <TopicBox food="Kottu"/>

      <Link to="/about">Visit About Page</Link>
      
      <div className="contact">
        <Link to="/contact">Visit contact us </Link>
      </div>
      

    </div>
  )
}
