import "../styles/Footer.css";
import {
	TiSocialFacebook,
	TiSocialGithub,
	TiSocialLinkedin,
	TiSocialTwitter,
} from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Footer({ isLoggedIn }) {
	const handleClick = () => {
		{
		!isLoggedIn
			? alert(
					"Dear user, you have to login in odrer to access the publish page!"
				 )
			: null;
		}
	};
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="row">
					<div className="about-p">
						<h6>About</h6>
						<p className="text-justify">
							We believe in a future where everyone has a real opportunity to
							lead a thriving life. CodeYourFuture (CYF) is a UK based
							non-profit organisation that trains some of the most deprived
							members of society to become web developers and helps them to find
							work in the tech industry. CYF students are trained in full-stack
							web development by volunteers from the tech industry, putting a
							strong emphasis on collaboration and product development through
							tech projects. CYF graduates work in companies like FT, BBC, STV,
							Ticketmaster and startups like Adzuna, Sensible Object, tlr and
							WeGotPop.
						</p>
					</div>
					<div className="links">
						<h6>Quick Links</h6>
						<ul className="footer-links">
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/contact">Contact us</Link>
							</li>
							<li>
								<Link to="/publish" onClick={handleClick}>
									Publish
								</Link>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
			<div className="container-bottom">
				<div className="row-bottom">
					<div className="copyright-p">
						<p className="copyright-text">
							Copyright &copy; 2022 All Rights Reserved by Algorithm Doctors.
						</p>
					</div>

					<div className="social-icons">
						<ul className="social-icons">
							<li>
								<a className="facebook" href="#">
									<TiSocialFacebook />
								</a>
							</li>
							<li>
								<a className="twitter" href="#">
									<TiSocialTwitter />
								</a>
							</li>
							<li>
								<a
									target="_blank"
									className="github"
									href="https://github.com/seyedsharifi12/Algorithm-doctors-finalProject"
									rel="noreferrer"
								>
									<TiSocialGithub />
								</a>
							</li>
							<li>
								<a className="linkedin" href="#">
									<TiSocialLinkedin />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
