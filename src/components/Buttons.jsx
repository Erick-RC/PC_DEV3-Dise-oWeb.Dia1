import React from 'react';
import './Buttons.css';


import htmlImage from '../images/code.png'; 
import cssImage from '../images/css.png'; 
import jsImage from '../images/jsc.png'; 
import accessibilityImage from '../images/access.png'; 

const TopicButton = ({ image, name }) => (
  <button className="topic-btn">
    <img src={image} alt={name} className="icon" />
    {name}
  </button>
);

const Options = () => {
  const topics = [
    { name: 'HTML', image: htmlImage },
    { name: 'CSS', image: cssImage },
    { name: 'Javascript', image: jsImage },
    { name: 'Accessibility', image: accessibilityImage }
  ];

  return (
    <div className="quiz-container">
      <div className='buttons'>
        <h1>Welcome to the <br></br><b>Frontend Quiz!</b></h1>
        <p>Pick a subject to get started.</p>
      </div>
      <div className="topic-buttons">
        {topics.map((topic, index) => (
          <TopicButton key={index} image={topic.image} name={topic.name} />
        ))}
      </div>
    </div>
  );
};
  
  export default Options;
