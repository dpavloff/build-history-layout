export const SAVE_REPO_INFO = "SAVE_REPO_INFO";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const API_GET_BUILDS = "API/GET_BUILDS";
export const API_GET_BUILDS_SUCCESS = "API/GET_BUILDS_SUCCESS";
export const API_GET_BUILDS_FAILURE = "API/GET_BUILDS_FAILURE";

export const saveRepoInfo = (repoInfo) => ({
  type: SAVE_REPO_INFO,
  payload: repoInfo,
});

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const getBuilds = () => ({
  type: API_GET_BUILDS,
});

export const getBuildsFailure = () => ({
  type: API_GET_BUILDS_FAILURE,
});

export const getBuildsSuccess = () => ({
  type: API_GET_BUILDS_SUCCESS,
});
