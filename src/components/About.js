import React from 'react';

// Pass `mode` and `theme` as props to the About component
export default function About({ mode, theme }) {
  // Determine styles based on `mode` and `theme`
  const myStyle = {
    color: mode === 'dark' ? 'white' : 'black',
    backgroundColor: theme === 'dark' ? '#141414' :
                      theme === 'dark-blue' ? '#001020' :
                      theme === 'dark-green' ? '#012301' :
                      'white'
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Use TextUtils to quickly analyze your text for word count, character count, and readability. It's a handy tool for writers, students, and professionals who need to evaluate the efficiency and clarity of their content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               TextUtils is completely free to use. You can access all its features without any cost. It's an open-source project, meaning you can also contribute to its development or modify it according to your needs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is compatible with all modern web browsers, ensuring that you can use it on any device without any issues. Whether you're on Chrome, Firefox, Safari, or Edge, TextUtils provides a seamless experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
