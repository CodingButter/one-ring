import { useAuthContext } from '../providers/AuthProvider';

const useGitHubManager = () => {
  const { octokit } = useAuthContext();

  const getRepositories = async () => {
    const { data } = await octokit.repos.listForAuthenticatedUser({
      per_page: 1000,
    });
    data.sort((a, b) => {
      const aDate: number = new Date(a.created_at).getTime();
      const bDate: number = new Date(b.created_at).getTime();
      return bDate - aDate;
    });

    return data;
  };

  const getBranches = async (repo) => {
    const { data } = await octokit.repos.listBranches({
      owner: repo.owner.login,
      repo: repo.name,
    });

    return data;
  };
  return { getRepositories, getBranches };
};

export default useGitHubManager;
