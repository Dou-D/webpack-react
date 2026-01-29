import { createRoot } from "react-dom/client";
import App from "./component/App";

const container = document.getElementById("app");
createRoot(container).render(<App />);
