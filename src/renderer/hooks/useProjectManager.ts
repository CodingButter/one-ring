import useElectronStore from './useElectronStore';

export type ProjectType = {
  name: string;
  github_url: string;
  description: string;
  repository_url: string;
  organization_name: string;
  screenshot_url: string;
  local_path: string;
  local_uri: string;
};

const useProjectManager = () => {
  const [projects, setProjects] = useElectronStore('projects', []);
  const [currentProject, setCurrentProject] = useElectronStore(
    'currentProject',
    null
  );
  const createProject = (projectData: ProjectType) => {
    const newProjects = [...projects, projectData];
    setProjects(newProjects);
    setCurrentProject(projectData);
  };
  return { projects, currentProject, createProject };
};

export default useProjectManager;
