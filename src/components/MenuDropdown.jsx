export const MenuDropdown = () => {
	return (
		<>
			<a>
				Create New <i className="fa-solid fa-angle-down"></i>
			</a>
			<div id="menuDropdown" className="dropdown">
				<ul>
					<li>
						<i className="fa-solid fa-suitcase"></i>New Projects
					</li>
					<li>
						<i className="fa-solid fa-user"></i>Create Users
					</li>
					<li>
						<i className="fa-solid fa-chart-column"></i>Revenue Report
					</li>
					<li>
						<i className="fa-solid fa-gear"></i>Settings
					</li>
					<li>
						<i className="fa-solid fa-headphones-simple"></i>Help & Support
					</li>
				</ul>
			</div>
		</>
	);
};
