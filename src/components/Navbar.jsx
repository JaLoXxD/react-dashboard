import { useState, useRef, useEffect } from "react";
import bigLogo from "../assets/images/headLogo.png";
import profilePhoto from "../assets/images/profilePhoto.jpg";
import { LeftSidebar } from "./LeftSidebar";
/* DROPDOWNS COMPONENTS */
import { UserDropdown } from "./UserDropdown";
import { NotificationDropdown } from "./NotificationDropdown";
import { LanguagesDropdown } from "./LanguagesDropdown";
import { SocialMediaDropdown } from "./SocialMediaDropdown";
import { SearchDropdown } from "./SearchDropdown";
import { MegaMenuDropdown } from "./MegaMenuDropdown";
import { MenuDropdown } from "./MenuDropdown";

export const Navbar = ({ onOpenSlideBar }) => {
	const [menu, setMenu] = useState("");
	const [fullScreen, setFullScreen] = useState("");
	const [slideBar, setSlideBar] = useState(false);
	const leftMenuRef = useRef();
	const menuRef = useRef();
	const notiMenu = useRef();
	const buttonRef = useRef();
	const handleMenu = (val) => {
		if (menu === val) {
			setMenu("");
		} else {
			setMenu(val);
			setSlideBar(!slideBar);
		}
	};
	useEffect(() => {
		const closeMenu = (e) => {
			if (!e.path.includes(leftMenuRef.current) && !e.path.includes(buttonRef.current)) {
				setSlideBar(false);
				onOpenSlideBar(false);
			} else if (e.path.includes(buttonRef.current) && slideBar) {
				setSlideBar(false);
				onOpenSlideBar(false);
			} else {
				setSlideBar(true);
				onOpenSlideBar(true);
			}
			const activeMenu = document.getElementsByClassName("showMenu")[0];
			if (menu != "" && !e.path.includes(activeMenu)) {
				setMenu("");
			}
		};
		document.body.addEventListener("touchstart", closeMenu);
		document.body.addEventListener("click", closeMenu);
		return () => {
			document.body.removeEventListener("touchstart", closeMenu);
			document.body.removeEventListener("click", closeMenu);
		};
	}, [menu, slideBar]);
	const handleSlideBar = () => {
		//setSlideBar(!slideBar);
		setMenu("");
	};
	const appContainer = document.querySelector("#root");
	const toggleFullScreen = () => {
		if (!fullScreen) {
			appContainer.requestFullscreen();
			setFullScreen(true);
		} else {
			document.exitFullscreen();
			setFullScreen(false);
			setMenu("");
		}
	};
	return (
		<>
			<header className="navContainer">
				<div className="logoContainer">
					<div className="bigLogo">
						<img src={bigLogo} alt="header big logo" />
						<span className={!slideBar ? "hideTitle" : ""}>Jorge Hidalgo</span>
					</div>
				</div>
				<div className="leftContent">
					<div className="sideBarBtn">
						<i
							onClick={() => {
								handleSlideBar();
							}}
							ref={buttonRef}
							className="fa-solid fa-bars"></i>
					</div>
					<ul className="menuOptions">
						<li id="customMenu" className={`option menuLink ${menu === "customMenu" && "showMenu"}`} onClick={() => handleMenu("customMenu")}>
							<MenuDropdown />
						</li>
						<li id="megaMenu" className={`option menuLink ${menu === "megaMenu" && "showMenu"}`} onClick={() => handleMenu("megaMenu")}>
							<MegaMenuDropdown />
						</li>
					</ul>
				</div>
				<div className="rightContent">
					<div id="searchMenu" className={`option menuLink ${menu === "searchMenu" && "showMenu"}`} onClick={() => handleMenu("searchMenu")}>
						<SearchDropdown />
					</div>
					<div className="option" onClick={toggleFullScreen}>
						<div className="fullScreen">
							<i className={fullScreen ? "fa-solid fa-compress" : "fa-solid fa-expand"}></i>
						</div>
					</div>
					<div
						id="socialMediaMenu"
						className={`option menuLink ${menu === "socialMediaMenu" && "showMenu"}`}
						onClick={() => handleMenu("socialMediaMenu")}>
						<SocialMediaDropdown />
					</div>
					<div
						id="languagesMenu"
						className={`option menuLink ${menu === "languagesMenu" && "showMenu"}`}
						onClick={() => handleMenu("languagesMenu")}>
						<LanguagesDropdown />
					</div>
					<div
						id="notificationsMenu"
						ref={notiMenu}
						className={`option menuLink ${menu === "notificationsMenu" && "showMenu"}`}
						onClick={() => handleMenu("notificationsMenu")}>
						<NotificationDropdown profilePhoto={profilePhoto} />
					</div>
					<div
						id="userMenu"
						className={`option menuLink ${menu === "userMenu" && "showMenu"}`}
						onClick={() => handleMenu("userMenu")}
						ref={menuRef}>
						<UserDropdown profilePhoto={profilePhoto} />
					</div>
					<div className="settings">
						<i className="fa-solid fa-gear"></i>
					</div>
				</div>
			</header>
			<LeftSidebar show={slideBar} forwadedRef={leftMenuRef} />
		</>
	);
};
