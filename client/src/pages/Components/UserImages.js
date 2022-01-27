import "../styles/UserImage.css";

export default function UserImage({ user }) {
	return (
			<img
				className="user-image"
				src={`${user.imageUrl}`}
				alt="google user"
			></img>
	);
}
