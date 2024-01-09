import img from "../../images/background.jpg";

/*
This renders the background image when the user clicks on the "Home" button 
in the navigation bar
*/

const Home = () => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return <img id="img" src={img} style={imageStyle} alt="Background" />;
};

export default Home;
