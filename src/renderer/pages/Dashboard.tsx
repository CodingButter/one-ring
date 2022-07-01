import {
  Card,
  CardContent,
  Grid,
  Paper,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Stack,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import useGitHubManager from '../hooks/useGitHubManager';

import useProjectManager from '../hooks/useProjectManager';
import Project from '../components/common/Project';

interface Props extends React.PropsWithChildren {
  setPending: () => void;
  pending: boolean;
}

const Dashboard = ({ setPending, pending }: Props) => {
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const { getRepositories, getBranches } = useGitHubManager();
  const [repositories, setRepositories] = useState([]);
  const [branches, setBranches] = useState([]);
  const { projects, createProject } = useProjectManager();

  const handleGetRepositories = async () => {
    const repos = await getRepositories();
    setRepositories(repos);
  };

  const handleChangeRepo = async (event) => {
    const repo = repositories.find((rep) => rep.id === event.target.value);
    const brch = await getBranches(repo);
    setBranches(brch);
    setSelectedBranch(brch.length === 1 ? brch[0] : null);
    setSelectedRepo(repo);
  };

  const handleChangeBranch = (event) => {
    const branch = branches.find((br) => br.name === event.target.value);
    setSelectedBranch(branch);
  };

  useEffect(() => {
    handleGetRepositories();
  }, []);
  useEffect(() => {
    if (repositories.length > 0) {
      setPending(false);
    }
  }, [repositories]);

  return (
    pending === false && (
      <Stack
        sx={{ width: '100%' }}
        direction="row"
        justifyContent="center"
        padding={3}
      >
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
        {repositories.length > 0 && (
          <Card sx={{ width: '100%' }} variant="outlined">
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={branches.length > 0 ? 6 : 12}>
                  <FormControl fullWidth>
                    <InputLabel id="select-repo-label">Repositories</InputLabel>
                    <Select
                      labelId="select-repo-label"
                      id="select-repo"
                      label="Repositories"
                      value={selectedRepo?.id || ''}
                      onChange={handleChangeRepo}
                    >
                      {repositories.map((repository) => (
                        <MenuItem key={repository.id} value={repository.id}>
                          {repository.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                {selectedRepo && (
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="select-branch-label">Branch</InputLabel>
                      <Select
                        labelId="select-branch-label"
                        id="select-branch"
                        label="Branches"
                        value={selectedBranch?.name || ''}
                        onChange={handleChangeBranch}
                      >
                        {branches.map((branch) => (
                          <MenuItem key={branch.name} value={branch.name}>
                            {branch?.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        )}
      </Stack>
    )
  );
};

export default Dashboard;
