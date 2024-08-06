import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "auto",
        height: "auto",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
};

export default Loader;
