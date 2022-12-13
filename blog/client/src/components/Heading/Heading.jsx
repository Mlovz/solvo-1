import "./heading.css";

const Heading = ({ color, children }) => {
  return (
    <h1 style={{ color: color }} className="heading">
      {children}
    </h1>
  );
};

export default Heading;
