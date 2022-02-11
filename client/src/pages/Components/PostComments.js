import React from "react";
import Comments from "./Comments";
import "../styles/PostComments.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const commentsSchema = Yup.object().shape({
    Comments: Yup.string()
        .min(2, "Too Short! (Min 2 Chars Required)")
        .max(100, "Too Long! (Max 100 Chars Allowed)"),
});

function PostComments({ user, id }) {
    const submitComment = async (obj) => {

        axios
            .post(`/api/comments/${id}`, obj)
            .then((res) => {
                if (res.status != 200) {
                    throw new Error(res.statusText);
                }
            })
            .catch((err) => console.error(err));
    };
    return (
			<div className="post">
				<div className="post__header">
					<Formik
						initialValues={{
							Comments: "",
						}}
						validationSchema={commentsSchema}
						onSubmit={(values, { resetForm }) => {
							submitComment({ ...values, googleId:user.googleId });
							resetForm();
						}}
					>
						{({ errors, touched }) => (
							<Form className="post__form">
								<Field
									className="post__input"
									name="comments"
									placeholder="     Please Comment..."
									as="textarea"
								/>
								{errors.Comments && touched.Comments ? (
									<div className="errorMessage">{errors.Comments}</div>
								) : null}
								<button type="submit" className="post-button">
									Submit
								</button>
							</Form>
						)}
					</Formik>
					{/* {user.googleId && ( */}
						<div className="post__comments">
							<Comments user={user} id={id} />
						</div>
					{/* )} */}
				</div>
			</div>
		);
}
export default PostComments;