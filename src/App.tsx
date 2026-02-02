import { Child } from "./component/Child";
import ConversationIcon from "./assets/images/conversation.svg";
import { RouterProvider } from "react-router";
import { router } from "./router";
import catUrl from "./assets/images/image.png?sizes[]=300,sizes[]=600,sizes[]=1024";

const App: React.FC = () => {
  // const catUrl = new URL(
  //   "./assets/images/image.png?sizes[]=300,sizes[]=600,sizes[]=1024",
  //   import.meta.url,
  // ).href;
  return (
    <div>
      <Child name="dou" />
      <img src={catUrl} alt="小猫" srcSet={catUrl.srcSet} />
      <ConversationIcon />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
