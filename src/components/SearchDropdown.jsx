import bigLogo from "../assets/images/headLogo.png";
import profilePhoto from "../assets/images/profilePhoto.jpg";

export const SearchDropdown = () => {
	return (
		<>
			<a className="searchBar">
				<input type="text" placeholder="Search..." />
				<i className="fa-solid fa-magnifying-glass"></i>
			</a>
			<div id="searchDropdown" className="dropdown">
				<h4>Found 512 results</h4>
				<ul>
					<li>
						<p>
							<i className="fa-solid fa-house-chimney"></i>Analytics Report
						</p>
					</li>
					<li>
						<p>
							<i className="fa-solid fa-life-ring"></i>Analytics Report
						</p>
					</li>
					<li>
						<p>
							<i className="fa-solid fa-gear"></i>Analytics Report
						</p>
					</li>
				</ul>
				<h4>Users</h4>
				<ul className="usersUl">
					<li>
						<img src={profilePhoto} alt="" />
						<div className="userInfo">
							<h5>Jane Doe</h5>
							<p>Educational Psychologist</p>
						</div>
					</li>
					<li>
						<img src={bigLogo} alt="" />
						<div className="userInfo">
							<h5>Jorge Hidalgo</h5>
							<p>Full-stack developer</p>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};
