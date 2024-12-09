import React from 'react';
import './App.css';

const App = () => {
  const artesianContent = [
    { id: 1, image: '/image1.png' },
    { id: 2, image: '/image2.png' },
    { id: 3, image: '/image3.png' },
    { id: 4, image: '/image4.png' },
  ];

  const teraiConditions = [
    { id: 1, title: 'Why Terai Region is More Suitable', image: '/image6.png' },
    { id: 2, title: 'Challenges Across Other States', image: '/image7.png' },
  ];

  const decline = [
    { id: 1, title: 'Decline of Autoflow Wells', image: '/image12.png' },
  ];

  return (
    <div className="container">
      <h1>Artesian Wells</h1>
      <h2>Terai Regions in India</h2>

      {/* First Row: Images 1 to 4 */}
      <div className="box-list">
        {artesianContent.map((content) => (
          <div key={content.id} className="box">
            <img src={content.image} alt={`Artesian well ${content.id}`} className="box-image" />
          </div>
        ))}
      </div>

      {/* Supporting Points Section */}
      <div className="terai-points">
        <h3>Key Points About the Terai Region</h3>
        <ul>
          <li>An artesian well is a well that brings groundwater to the surface without pumping because it is under pressure within a body of rock and/or sediment known as an aquifer.</li>
          <li>When trapped water in an aquifer is surrounded by layers of impermeable rock or clay, which apply positive pressure to the water, it is known as an artesian aquifer.</li>
          <li>If a well were to be sunk into an artesian aquifer, water in the well-pipe would rise to a height corresponding to the point where hydrostatic equilibrium is reached.[</li>
          <li>A well drilled into such an aquifer is called an artesian well.</li>
          <li>If water reaches the ground surface under the natural pressure of the aquifer, the well is termed a flowing artesian well.</li>
        </ul>
      </div>

      {/* Supporting Conditions Section */}
      <h2>Conditions Supporting Autoflow Wells</h2>
      <div className="supporting-conditions">
        {/* Left Section (Image 5) */}
        <div className="circle-diagram">
          <img src="/image5.png" alt="Circle Diagram" className="circle-image hover-effect" />
        </div>

        {/* Right Section */}
        <div className="right-conditions">
          {/* Image 8 */}
          <div className="top-image">
          </div>
          {/* Vertical Stack for Images 9, 10, 11 */}
          <div className="vertical-stack">
            <img src="/image8.png" alt="Supporting condition top" className="small-image hover-image" />
            <img src="/image9.png" alt="Supporting condition 9" className="small-image hover-image" />
            <img src="/image10.png" alt="Supporting condition 10" className="small-image hover-image" />
            <img src="/image11.png" alt="Supporting condition 11" className="small-image hover-image" />
          </div>
        </div>
      </div>

      {/* Fourth Row: Terai Conditions 6 & 7 */}
      <div className="horizontal-list">
        {teraiConditions.map((condition) => (
          <div key={condition.id} className="horizontal-item">
            <h3>{condition.title}</h3>
            <img src={condition.image} alt={condition.title} className="box-image" />
          </div>
        ))}
      </div>

      {/* Decline Section */}
      <div className="decline-box">
        <h3>{decline[0].title}</h3>
        <img src={decline[0].image} alt={decline[0].title} />
      </div>
    </div>
  );
};

export default App;
