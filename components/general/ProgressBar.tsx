import React from 'react';

const ProgressBar = (props) => {
  const { bgcolor, completed, label } = props;

  const containerStylesInner = {
    height: 20,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const containerStylesOuter = {
    height: 20,
    borderRadius: 50,
  }

  const fillerStyles: React.CSSProperties = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div className="container-outer" style={containerStylesOuter}>
        <p className="font-bold font-medium text-sm sm:text-base lg:text-lg   max-w-2xl text-zinc-800 ">
        {label}
        </p>
      <div className="container-inner" style={containerStylesInner}>
        <div className="bar" style={fillerStyles}>
          <span className="label" style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
