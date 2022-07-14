import "./App.css";
import "./styles/card.css";
import "./styles/table.css";
import { Card } from "./components/Card";
import { Table } from "./components/Table";
import { cardsInfo } from "./assets/js/cardsInfo";
import { Navbar } from "./components/Navbar";
import { useState } from "react";

function App() {
	const [open, setOpen] = useState(false);
	const onOpenSlide = (status) => {
		setOpen(status);
	};

	const cards = cardsInfo.map((el, i) => {
		return <Card key={i} text={el.text} value={el.value} icon={el.icon} />;
	});

	return (
		<div className="App">
			<Navbar onOpenSlideBar={(status) => onOpenSlide(status)} />
			<div className="App-header">
				<div className={`container ${open ? "openSlidebar" : ""}`}>
					<div className="cardsRow">{cards}</div>
					<Table />
				</div>
			</div>
		</div>
	);
}

export default App;
