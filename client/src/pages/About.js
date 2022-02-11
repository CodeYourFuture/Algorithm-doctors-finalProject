import "./styles/About.css";

const About = () => (
	<main role="main" id="main">
		<div className="about-page">
			<h1 className="heading">A little bit about us</h1>
			<p className="about-page-intro">
				We are the Algorithm-docs and we are tasked to build an
				Energiser/Icebreaker app. Our special thank yous first and foremost go to
				CYF, our fantastic tech mentor Orhan and our PM Nick. You can
				reach us via the links below which are linked to our linkedin profiles.
			</p>
			<div className="profile-links">
				<a href="https://www.linkedin.com/in/konika-b-lily-481911216/">
					Konika
				</a>
				<a href="https://www.linkedin.com/in/mya-skylar-290838221/">Mya</a>
				<a href="https://www.linkedin.com/in/seyed-s-b">Seyed</a>
				<a href="/#">Azan</a>
				<a href="https://github.com/textbook/starter-kit/wiki">Wiki</a>
			</div>
		</div>
	</main>
);

export default About;
