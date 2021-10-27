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

    case actions.GET_METRICS: {
      return state;
    }

    case actions.SAVE_METRICS: {
      return { ...state, metrics: [...state.metrics, ...action.payload] }
    }

    default:
      return state;
  }
}
