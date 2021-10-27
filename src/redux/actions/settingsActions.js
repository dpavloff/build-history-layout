import { getBuildsFromApi } from "../../api/getBuildInfo";
import { getMetricsFromApi } from '../../api/getMetrics';

export const SAVE_REPO_INFO = "SAVE_REPO_INFO";
export const API_GET_BUILDS = "API/GET_BUILDS";
export const API_GET_BUILDS_SUCCESS = "API/GET_BUILDS_SUCCESS";
export const API_GET_BUILDS_FAILURE = "API/GET_BUILDS_FAILURE";
export const SAVE_METRICS = "SAVE_METRICS";
export const GET_METRICS = "GET_METRICS";

export const saveRepoInfo = (repoInfo) => ({
  type: SAVE_REPO_INFO,
  payload: repoInfo,
});

export const getBuilds = () => ({
  type: API_GET_BUILDS,
});

export const getBuildsFailure = () => ({
  type: API_GET_BUILDS_FAILURE,
});

export const getBuildsSuccess = (builds) => ({
  type: API_GET_BUILDS_SUCCESS,
  payload: builds
});

export function actionSaveRepoInfo(data) {
  return (dispatch) => {
    dispatch(saveRepoInfo(data));
  }
}

export const getMetrics = () => ({
  type: GET_METRICS
});

export const saveMetrics = (metrics) => ({
  type: SAVE_METRICS,
  payload: metrics
});

export function fetchMetrics() {
  return async (dispatch) => {
    dispatch(getMetrics());

    try {
      await getMetricsFromApi().then(data => dispatch(saveMetrics(data)));
    } catch (err) {
      console.log(err);
    }
  }
}

export function fetchBuilds() {
  return async (dispatch) => {
    dispatch(getBuilds());

    try {
      await getBuildsFromApi().then(data =>
        dispatch(getBuildsSuccess(data))
      );
    } catch (err) {
      console.log(err);
      dispatch(getBuildsFailure());
    }
  }
}

