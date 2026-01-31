import { Child } from "./component/Child";
import ConversationIcon from "./assets/images/conversation.svg";
import { RouterProvider } from "react-router";
import { router } from "./router";
const App: React.FC = () => {
  const catUrl = new URL("./assets/images/image.png", import.meta.url).href;
  return (
    <div>
      <Child name="dou" />
      <img src={catUrl} alt="小猫" />
      <ConversationIcon />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
