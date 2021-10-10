import { createStore } from "redux";
import { buildsMock } from "./mock/builds";

const initReducer = (state = {
    interval: 10,
    buildsInfo: {
        userNameRepoName: undefined,
        buildCommand: undefined,
        mainBranch: undefined,
        builds: []
    },
    isLoadingBuilds: false,

}, action) => {
    switch (action.type) {
        case 'SAVE_INPUTS':
            return {
                ...state,
                buildsInfo: {
                    ...state.buildsInfo,
                    userNameRepoName: action.userNameRepoName,
                    buildCommand: action.buildCommand,
                    mainBranch: action.mainBranch
                }
            };

        case 'GET_BUILDS':
            const recievedBuilds = buildsMock;

            return {
                ...state,
                buildsInfo: {
                    ...state.buildsInfo,
                    builds: recievedBuilds
                } 
            };

        default:
            return {
                ...state
            }
    }
}

export default createStore(initReducer);