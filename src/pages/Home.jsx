import img from "../images/background.jpg";

const Home = () => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <div id="buttonSection">
        <button>I Want To Learn</button>
        <button>I Want To Teach</button>
      </div>
      <div id="displaySection">
        <img id="img" src={img} style={imageStyle} alt="Background" />;
      </div>
    </>
  );
};

export default Home;
