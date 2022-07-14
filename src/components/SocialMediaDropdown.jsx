import slackIcon from "../assets/images/slack.png";
import githubIcon from "../assets/images/github.png";
import dribbbleLogo from "../assets/images/dribbble.png";
import bitbucketLogo from "../assets/images/bitbucket.png";
import dropboxLogo from "../assets/images/dropbox.png";
import gsuiteLogo from "../assets/images/g-suite.png";

export const SocialMediaDropdown = () => {
	return (
		<>
			<a className="socialMedia">
				<i className="fa-solid fa-border-all"></i>
			</a>
			<div id="socialMediaDropdown" className="dropdown">
				<ul>
					<li>
						<img src={slackIcon} alt="notification image" />
						<p>Slack</p>
					</li>
					<li>
						<img src={githubIcon} alt="notification image" />
						<p>GitHub</p>
					</li>
					<li>
						<img src={dribbbleLogo} alt="notification image" />
						<p>Dribbble</p>
					</li>
					<li>
						<img src={bitbucketLogo} alt="notification image" />
						<p>Bitbucket</p>
					</li>
					<li>
						<img src={dropboxLogo} alt="notification image" />
						<p>Dropbox</p>
					</li>
					<li>
						<img src={gsuiteLogo} alt="notification image" />
						<p>G-Suite</p>
					</li>
				</ul>
			</div>
		</>
	);
};
