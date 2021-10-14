export const initialState = {
  repoName: "",
  mainBranch: "",
  buildCommand: "",
  builds: [],
  interval: 10,
  loading: false,
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_REPO_INFO": {
      const { repoName, mainBranch, buildCommand, interval } =
        action.payload.repoInfo;
      state.repoName = repoName;
      state.mainBranch = mainBranch;
      state.buildCommand = buildCommand;
      state.interval = interval;

      return state;
    }

    case "TOGGLE_LOADING": {
      state.loading = !state.loading;

      return state;
    }

    case "API/GET_BUILDS": {
      return state;
    }

    case "API/GET_BUILDS_SUCCESS": {
      const builds = action.payload.builds;
      state.builds = builds;

      return state;
    }

    case "API/GET_BUILDS_FAILURE": {
      return state;
    }

    default:
      return state;
  }
}
