
import { React , useState } from "react";
import "../styles/PublishEnergiserPage.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

		const categoryOptions = [
			{ key: "Select Category", value: "Select Category" },
			{ key: "In-Person", value: "In-person" },
			{ key: "Remote", value: "Remote" },
			{ key: "fun", value: "Fun" },
			{ key: "Team-building", value: "Team-building" },
		];
const publishEnergiserSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(100, "Too Long!")
		.required("Required"),
	description: Yup.string()
		.min(10, "Too Short!")
		.max(6000, "Too Long!")
		.required("Required"),
	participants: Yup.number(),
	duration: Yup.number(),
	category: Yup.string()
		.required("Required"),
	instructions: Yup.string()
		.min(100, "Too Short!")
		.max(6000, "Too Long!")
		.required("Required"),
});

export const PublishEnergiserPage = () => {
	const handleSubmit = async (obj) => {
		fetch("/api/publish", {
			method: "POST",
			body: JSON.stringify(obj),
			headers: {
				"Content-Type": "application/json",
			},
		});
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
					category: "",
					instructions: "",
				}}
				validationSchema={publishEnergiserSchema}
				onSubmit={(values, { resetForm }) => {
					handleSubmit(values);
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

						{/* category */}
						<Field
							className="my-select"
							as="select"
							name="category"
							placeholder="Select a category..."
						>
							{categoryOptions.map((option) => {
								return (
									<option key={option.value} value={option.value}>
										{option.key}
									</option>
								);
							})}
						</Field>

						{errors.category && touched.category ? (
							<div className="errorMessage">{errors.category}</div>
						) : null}
						{/* category ends */}

						<Field
							className="fieldInstructions"
							name="instructions"
							placeholder="Enter instructions here..."
							as="textarea"
						/>
						{errors.instructions && touched.instructions ? (
							<div className="errorMessage">{errors.instructions}</div>
						) : null}

						<button type="submit" className="publish-button">Publish</button>

					</Form>
				)}
			</Formik>
		</div>
	);
};

export default PublishEnergiserPage;
