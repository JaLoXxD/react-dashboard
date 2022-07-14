import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "./styles/defaultColors.css";
import "./styles/navbar.css";
import "./styles/leftSidebar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
