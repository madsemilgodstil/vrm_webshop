// Button-2.js

const Button2 = ({ text, onClick }) => {
  return (
    <button className="your-button-styles" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button2;
