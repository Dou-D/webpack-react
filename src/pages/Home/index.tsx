const imgPath = new URL("../../assets/images/catRabbit.png", import.meta.url)
  .href;
const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <img src={imgPath} alt="" />
    </div>
  );
};

export default Home;
