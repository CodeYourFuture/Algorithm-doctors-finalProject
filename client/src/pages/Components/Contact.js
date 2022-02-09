import React,{ useState } from "react";
import "../styles/Contact.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const contactFeedbackSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(100, "Too Long!")
		.required("Required"),
	suggestions: Yup.string()
		.min(100, "Too Short!")
		.max(6000, "Too Long!")
		.required("Required"),
});

export default function Contact(){
	const[response, setResponse] = useState("");
	const handleSubmit = async (obj) => {
		const res = await fetch("/api/feedback", {
			method: "POST",
			body: JSON.stringify(obj),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const status = await (res.status);
		setResponse(status);
	};



	return (
		<div className="contactPage">
			<div className="alet-message">{response ===200? <p style={{ color:"green" }}>Thank you for your feedback, we value your input!</p>: response>=350 ?<p style={{ color:"red" }}>Something went wring with your submition, please try again!</p>:null}</div>
			<h1 className="contactMessage">Please send us your honest feedback</h1>
			<Formik
				initialValues={{
					name: "",
					suggestions: "",
				}}
				validationSchema={contactFeedbackSchema}
				onSubmit={(values, { resetForm }) => {
					handleSubmit(values);
					resetForm();
				}}
			>
				{({ errors, touched }) => (
					<Form className="feedbackForm">
						<Field
							className="field"
							name="name"
							placeholder="Enter your name..."
						/>
						{errors.name && touched.name ? <div className="errorMessage">{errors.name}</div> : null}
						<Field
							className="fieldSuggestion"
							name="suggestions"
							placeholder="Enter your suggestions here..."
							as="textarea"
						/>
						{errors.suggestions && touched.suggestions ? (
							<div className="errorMessage">{errors.suggestions}</div>
						) : null}
						<button type="submit" className="contact-button">Send Feedback</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}