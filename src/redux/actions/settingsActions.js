import { getBuildsFromApi } from "../../api/getBuildInfo";
import { getMetricsFromApi } from '../../api/getMetrics';

export const SAVE_REPO_INFO = "SAVE_REPO_INFO";
export const API_GET_BUILDS = "API/GET_BUILDS";
export const API_GET_BUILDS_SUCCESS = "API/GET_BUILDS_SUCCESS";
export const API_GET_BUILDS_FAILURE = "API/GET_BUILDS_FAILURE";
export const API_GET_METRICS = "API/GET_METRICS";
export const API_GET_METRICS_SUCCESS = "API/GET_METRICS_SUCCESS";

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
  type: API_GET_METRICS,
})

export const getMetricsSuccess = (metrics) => ({
  type: API_GET_METRICS_SUCCESS,
  payload: metrics
});

export function fetchMetricsFromApi() {
  return async (dispatch) => {
    try {
      await getMetricsFromApi().then(data => {
        dispatch(getMetricsSuccess(data))
      });
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

