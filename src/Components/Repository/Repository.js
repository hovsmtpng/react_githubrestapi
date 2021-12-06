import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaCode } from "react-icons/fa";

import {
  NoLineBreak,
} from "./style";

export default function Repository({repo}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <FaCode className="icons" /> <NoLineBreak>{repo.language}</NoLineBreak>
        <Typography gutterBottom variant="h7" component="div">
        {repo.name}
        </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {repo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={repo.html_url} size="small">Jump to Github</Button>
      </CardActions>
    </Card>
  );
}
