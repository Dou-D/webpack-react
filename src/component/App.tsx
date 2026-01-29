import { Child } from "./Child";
import ConversationIcon from "../../public/assets/images/conversation.svg";
const App: React.FC = () => {
  const catUrl = new URL(
    "../../public/assets/images/image.png",
    import.meta.url,
  ).href;
  return (
    <div>
      <Child name="dou" />
      <img src={catUrl} alt="小猫" />
      <ConversationIcon />
    </div>
  );
};

export default App;
