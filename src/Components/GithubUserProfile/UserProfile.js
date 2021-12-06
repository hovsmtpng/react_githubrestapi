import React from "react";
import Button from '@mui/material/Button';
import { CardContent, CH2, CH6, CH3, CardInfo, Avatar } from "./UserProfileStyles.js";

export default function UserProfile({ data, OpenRepoFunction }) {
	return (
        <CardContent>
          <CardInfo>
			      {data.avatar_url && <Avatar src={data.avatar_url} alt={data.login} />}
            <CH2>{data.name}</CH2>
            <CH3>{data.location}</CH3>
            <CH6>{data.followers} followers | {data.following} following</CH6>
            <Button variant="outlined" color="secondary" onClick={() => OpenRepoFunction()} size="small">{data.public_repos} Repository</Button>
          </CardInfo>
        </CardContent>
	);
}
