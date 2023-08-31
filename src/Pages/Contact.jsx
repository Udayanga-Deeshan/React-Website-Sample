import React from 'react';
// import myimage from '/images/beyonce.jpg'



export default function Contact() {
    function Card(props){
        return <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
            <p>{props.tel}</p>
            <p>{props.email}</p>

            
        </div>
    }
  return (
    <div>
      <h1>Contact us Page</h1>
      {/* <Card name="Beyonce" img="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"/> */}
      <Card name="Beyonce Giselle" img="/images/beyonce.jpg" tel="77568789" email="beyonce12@gmail.com"/>
      <Card name="Bruce Parker" img="/images/men2.jpg" tel="77568789" email="bruce12@gmail.com"/>
      <Card name="Kylie Jenner" img="/images/Kyliejenner.jpg" tel="77568789" email="kylieJenner@gmail.com"/>
      

    </div>
  )
}
