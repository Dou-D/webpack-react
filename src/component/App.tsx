import { Child } from "./Child";
const App: React.FC = () => {
  const catUrl = new URL("assets/images/image.png", import.meta.url).href;
  return (
    <div>
      <Child name="dou" />
      <img src={catUrl} alt="小猫" />
      {/* <img src="assets/images/conversation.svg" alt="Conversation Icon" /> */}
    </div>
  );
};

export default App;
