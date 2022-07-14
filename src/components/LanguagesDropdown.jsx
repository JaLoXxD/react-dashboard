import usaFlag from "../assets/images/usa-flag.jpg";
import germanyFlag from "../assets/images/germ-flag.jpg";
import spainFlag from "../assets/images/spain-flag.jpg";
import italyFlag from "../assets/images/italy-flag.jpg";
import russiaFlag from "../assets/images/russia-flag.jpg";

export const LanguagesDropdown = () => {
	return (
		<>
			<a className="languages">
				<img src={usaFlag} alt="" />
			</a>
			<div id="languagesDropdown" className="dropdown">
				<ul>
					<li>
						<img src={germanyFlag} alt="notification image" />
						<p>German</p>
					</li>
					<li>
						<img src={italyFlag} alt="notification image" />
						<p>Italian</p>
					</li>
					<li>
						<img src={spainFlag} alt="notification image" />
						<p>Spanish</p>
					</li>
					<li>
						<img src={russiaFlag} alt="notification image" />
						<p>Russian</p>
					</li>
				</ul>
			</div>
		</>
	);
};
