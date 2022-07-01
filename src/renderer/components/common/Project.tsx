import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { ProjectType } from '../../hooks/useProjectManager';

interface Props extends React.Props {
  project: ProjectType;
}
const Project = ({ project }: Props) => {
  return (
    <Card variant="outlined" elevation={2}>
      {project.screenshot_url && (
        <CardMedia
          component="img"
          alt={project.name}
          height="140"
          image={project.screenshot_url}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
