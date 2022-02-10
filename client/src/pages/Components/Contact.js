import React,{ useState } from "react";
import "../styles/Contact.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import SuccessResponse from "./SuccessResponse";
// import FailureResponse from "./FailureResponse";

const contactFeedbackSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short! (Min 2 Chars Required)")
		.max(100, "Too Long! (Max 100 Chars Allowed)")
		.required("Required"),
	suggestions: Yup.string()
		.min(50, "Too Short! (Min 50 Chars Required)")
		.max(6000, "Too Long! (Max 6000 Chars Allowed)")
		.required("Required"),
});

export default function Contact(){
	const[response, setResponse] = useState(null);
	const handleSubmit = async (obj) => {
		await fetch("/api/feedback", {
			method: "POST",
			body: JSON.stringify(obj),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(() => {
			setResponse("ok");
		}).catch(() => setResponse("error"));

	};

	return (
		<div className="whole-page">
			<div className="contactPage">
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
						if (response == "ok") {
							alert("Thank you for your time. Your submition was successful!");
						} else if (response == "failure") {
							alert("Your submition failed, Please try again!");
						}
					}}
				>
					{({ errors, touched }) => (
						<Form className="feedbackForm">
							<Field
								className="field"
								name="name"
								placeholder="Enter your name..."
							/>
							{errors.name && touched.name ? (
								<div className="errorMessage">{errors.name}</div>
							) : null}
							<Field
								className="fieldSuggestion"
								name="suggestions"
								placeholder="Enter your suggestions here..."
								as="textarea"
							/>
							{errors.suggestions && touched.suggestions ? (
								<div className="errorMessage">{errors.suggestions}</div>
							) : null}
							<button type="submit" className="contact-button">
								Send Feedback
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}