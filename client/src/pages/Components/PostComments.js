import React from "react";
import Comments from "./Comments";
import "../styles/PostComments.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";

const commentsSchema = Yup.object().shape({
    comments: Yup.string()
        .min(2, "Too Short! (Min 2 Chars Required)")
		.max(6000, "Too Long! (Max 6000 Chars Allowed)"),
});

function PostComments({ user, id }) {
	const [newData, setNewData] = useState([]);

	const [allMessage, setAllMessage] = useState([]);
	useEffect(() => {
		axios
			.get(`/api/comments?id=${id}`)
			.then((res) => {
				if (res.status != 200) {
					throw new Error(res.statusText);
				}
				return res.data;
			})
			.then((data) => {
				setAllMessage(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [id, newData]);

    const onSubmitComment = async (obj) => {

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
							comments: "",
						}}
						validationSchema={commentsSchema}
						onSubmit={(values, { resetForm }) => {
							onSubmitComment({ ...values, googleId: user.givenName, userImg: user.imageUrl });
							setNewData([...newData, values]);
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
								{errors.comments && touched.comments ? (
									<div className="errorMessage">{errors.comments}</div>
								) : null}
								<button type="submit" className="post-button">
									Submit
								</button>
							</Form>
						)}
					</Formik>
					{/* {user.googleId && ( */}
					<div className="post__comments">
						<Comments user={user} allMessage={allMessage} />
					</div>
					{/* )} */}
				</div>
			</div>
		);
}
export default PostComments;