import React from "react";

interface Props {

    alertVisible: boolean;
  }const Status = ({alertVisible}:Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {/* Smiley Emoji (:-) with border-radius and rotation */}
      <div style={{ display: 'inline-block', marginRight: '10px' }}>
        <span
          style={{
            display: 'inline-block',
            width: '60px',
            height: '60px',
            borderRadius: '50%', // This makes the circle
            backgroundColor: '#ffeb3b', // Yellow background
            textAlign: 'center',
            lineHeight: '60px', // Centers the text
            fontSize: '30px',
            marginRight: '10px',
            transform: 'rotate(90deg)', // Adjust the degree of rotation here
            transition: 'transform 0.3s ease', // Optional smooth rotation transition
          }}
        >
          {alertVisible ? ":-)" : ":-(" } {/* Smiley face */}
        </span>
      </div>
    </div>
  );
};

export default Status;
