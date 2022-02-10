import { React } from "react";
import "../styles/PublishEnergiserPage.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const publishEnergiserSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short! (Min 2 Chars Required)")
		.max(100, "Too Long! (Max 100 Chars Allowed)")
		.required("Required"),
	description: Yup.string()
		.min(10, "Too Short! (Min 10 Chars Required)")
		.max(6000, "Too Long! (Max 6000 Chars Allowed)")
		.required("Required"),
	participants: Yup.number()
		.min(2, "Too Low! (Min 2 Participants Required)")
		.max(100, "Too many people! (Max 100 Participants Allowed)"),
	duration: Yup.number().min(1, "Too Short! (Min 1 Min Required)").max(60, "Too Long! (Max 60 Mins Allowed)"),
	type: Yup.string().required("Required"),
	instructions: Yup.string()
		.min(100, "Too Short! (Min 100 Chars Required)")
		.max(6000, "Too Long! (Max 6000 Chars Allowed)")
		.required("Required"),
});

export const PublishForm = ({ user, setPublishStatus }) => {
	const handleSubmit = async (obj) => {
		// if (user && user.googleId) {
			axios.post("/api/publish",{ ...obj, googleId:"46847548" })
				.then(() => {
					setPublishStatus("ok");
				})
				.catch(() => setPublishStatus("error"));
		// }
	};

	return (
		<div className="publishPage">
			<h1 className="publishMessage">Publish Your Own Energiser</h1>
			<Formik
				initialValues={{
					name: "",
					description: "",
					participants: "",
					duration: "",
					type: "",
					instructions: "",
				}}
				validationSchema={publishEnergiserSchema}
				onSubmit={(values, { resetForm }) => {
					handleSubmit({ ...values, googleId: user.googleId });
					resetForm();
				}}
			>
				{({ errors, touched }) => (
					<Form className="publishForm">
						<Field
							className="field"
							name="name"
							placeholder="Enter energiser name..."
						/>
						{errors.name && touched.name ? (
							<div className="errorMessage">{errors.name}</div>
						) : null}
						<Field
							className="field"
							name="description"
							placeholder="Enter description here..."
						/>
						{errors.description && touched.description ? (
							<div className="errorMessage">{errors.description}</div>
						) : null}
						<Field
							className="field"
							name="participants"
							type="number"
							placeholder="Enter participants number..."
						/>
						{errors.participants && touched.participants ? (
							<div className="errorMessage">{errors.participants}</div>
						) : null}
						<Field
							className="field"
							name="duration"
							type="number"
							placeholder="Enter duration here..."
						/>
						{errors.duration && touched.duration ? (
							<div className="errorMessage">{errors.duration}</div>
						) : null}
						<Field className="my-select" as="select" name="type">
							<option defaultValue>Select type</option>
							<option value="In-person">In-person</option>
							<option value="Remote">Remote</option>
						</Field>

						{errors.type && touched.type ? (
							<div className="errorMessage">{errors.type}</div>
						) : null}

						<Field
							className="fieldInstructions"
							name="instructions"
							placeholder="Enter instructions here..."
							as="textarea"
						/>
						{errors.instructions && touched.instructions ? (
							<div className="errorMessage">{errors.instructions}</div>
						) : null}

						<button type="submit" className="publish-button">
							Publish
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default PublishForm;
