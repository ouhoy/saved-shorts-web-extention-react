import { createRoot } from "react-dom/client";
import Options from "./Options";

const container = document.getElementById("options");
const root = createRoot(container!);
root.render(<Options />);
