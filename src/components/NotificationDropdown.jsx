export const NotificationDropdown = ({profilePhoto}) => {
	return (
		<>
			<a className="notifications">
				<i className="fa-solid fa-bell"></i>
				<span className="counter">9</span>
			</a>
			<div id="notificationsDropdown" className="dropdown">
				<div className="notificationHeader">
					<p>Notification</p>
					<p>Clear all</p>
				</div>
				<ul>
					<li className="active">
						<img src={profilePhoto} alt="notification image" />
						<div className="notiInfo">
							<h5 className="title">Jane Doe</h5>
							<p>Hi, How are you? You need to complete your profile.</p>
						</div>
					</li>
					<li>
						<img src={profilePhoto} alt="notification image" />
						<div className="notiInfo">
							<h5 className="title">Jane Doe</h5>
							<p>Hi, How are you? You need to complete your profile.</p>
						</div>
					</li>
					<li>
						<img src={profilePhoto} alt="notification image" />
						<div className="notiInfo">
							<h5 className="title">Jane Doe</h5>
							<p>Hi, How are you? You need to complete your profile.</p>
						</div>
					</li>
					<li>
						<a>
							View all <i className="fa-solid fa-arrow-right"></i>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};
