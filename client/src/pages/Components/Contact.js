import React,{ useState } from "react";
import "../styles/Contact.css";
import { send } from "emailjs-com";

export default function Contact(){

    const [toSend, setToSend] = useState({
			from_name: "",
			message: "",
			reply_to: "",
		});
    const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
		};

    const onSubmit = (e) => {
			e.preventDefault();
			send("SERVICE ID", "TEMPLATE ID", toSend, "User ID")
				.then((response) => {
					console.log("SUCCESS!", response.status, response.text);
				})
				.catch((err) => {
					console.log("FAILED...", err);
				});
		};

    return (
			<div
				className="form-section"
				style={{
					backgroundImage: "url(\"https://images.pexels.com/photos/531972/pexels-photo-531972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\")",
					display: "grid",
                    backgroundPosition:"center",
                    backgroundSize:"cover",
					width: "40%",
					margin: "auto",
					border: "solid 0.5px grey",
					backgroundColor: "lightgrey",
				}}
			>
                <p style={{ fontSize:"2rem", textAlign:"center" }}>Please help us by giving your honest feedback</p>
				<form
					className="form-row align-items-center"
					style={{ width: "90%", margin: "auto", paddingTop: "20px" }}
				>
					<label htmlFor="name">Your Name:</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Your Name"
						required
						minLength="2"
					/>
					<label htmlFor="name">Your email:</label>
					<input
						type="text"
						name="reply_to"
						placeholder="Your email"
						value={toSend.reply_to}
						onChange={handleChange}
						className="form-control"
					/>
					<label htmlFor="message" style={{ padding: "5px" }}>
						Your suggestions:
					</label>
					<textarea
						type="text"
						name="message"
						rows="4"
						placeholder="Your suggestions"
						value={toSend.message}
						onChange={handleChange}
						className="form-control"
						style={{ hieght: "50px", marginBottom: "20px" }}
					/>
					<button
						type="submit"
						className="btn btn-primary"
						style={{ marginBottom: "10px" }}
					>
						Submit
					</button>
				</form>
			</div>
		);
}