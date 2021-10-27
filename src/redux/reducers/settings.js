import * as actions from '../actions/settingsActions';

export const initialState = {
  repoName: "",
  mainBranch: "",
  buildCommand: "",
  builds: [],
  interval: 10,
  loading: false,
  hasErrors: false,
  metrics: []
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SAVE_REPO_INFO: {
      return {...state, repoName: action.payload.repoName, mainBranch: action.payload.mainBranch, buildCommand: action.payload.buildCommand, interval: action.payload.interval};
    }

    case actions.API_GET_BUILDS: {
      return { ...state, loading: true };
    }

    case actions.API_GET_BUILDS_SUCCESS: {
      return { ...state, builds: [...state.builds, ...action.payload], loading: false };
    }

    case actions.API_GET_BUILDS_FAILURE: {
      return { ...state, loading: false, hasErrors: true};
    }

    case actions.API_GET_METRICS: {
      return { ...state, loading: true };
    }

    case actions.API_GET_METRICS_SUCCESS: {
      const metrics = [...action.payload].sort((a,b) => {
        let x = a['name'];
        let y = b['name'];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
      return { ...state, metrics: metrics, loading: false }
    }

    default:
      return state;
  }
}
