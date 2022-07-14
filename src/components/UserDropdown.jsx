import { useRef } from "react";

export const UserDropdown = ({ profilePhoto }) => {
	return (
		<>
			<a className="user">
				<img src={profilePhoto} alt="" />
				<span>Jane Doe</span>
				<i className="fa-solid fa-angle-down"></i>
			</a>
			<div className="dropdown">
				<p>Welcome !</p>
				<ul>
					<li>
						<i className="fa-solid fa-user"></i>My account
					</li>
					<li>
						<i className="fa-solid fa-gear"></i>Settings
					</li>
					<li>
						<i className="fa-solid fa-lock"></i>Look Screen
					</li>
					<li>
						<i className="fa-solid fa-arrow-right-from-bracket"></i>Logout
					</li>
				</ul>
			</div>
		</>
	);
};
