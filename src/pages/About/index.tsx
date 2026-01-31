const About: React.FC = () => {
  const url = new URL("../../assets/images/fridge.png", import.meta.url).href;

  return (
    <div>
      <h1>About</h1>
      <img src={url} alt="" />
    </div>
  );
};

export default About;
