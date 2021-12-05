import React from "react";
import "./UserProfile.css";

export default function UserProfile({ data }) {
	return (
		<div className="card-container">
			<header>
				<img src={data.avatar_url} alt={data.login} />
			</header>
			<h1 className="bold-text">
				{data.name}
			</h1>
			<h2 className="normal-text"></h2>
			<div className="social-container">
				<div className="likes">
					<h1 className="bold-text">{data.public_repos}</h1>
					<h2 className="smaller-text">Repositories</h2>
				</div>
				<div className="followers">
					<h1 className="bold-text">{data.followers}</h1>
					<h2 className="smaller-text">Followers</h2>
				</div>
				<div className="photos">
					<h1 className="bold-text">{data.following}</h1>
					<h2 className="smaller-text">Following</h2>
				</div>
			</div>
		</div>
	);
}
