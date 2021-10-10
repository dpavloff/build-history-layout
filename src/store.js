import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import buildsMock from "./mock/builds";

const initReducer = (state = {
    interval: 10,
    buildsInfo: {
        gitRepo: undefined,
        buildCommand: undefined,
        mainBranch: undefined,
        builds: []
    },
    isLoadingBuilds: false,

}, action) => {
    switch (action.type) {
        case 'INIT':
            return {
                ...state
            };

        case 'SAVE_INPUTS':
            return {
                ...state,
                buildsInfo: {
                    ...state.buildsInfo,
                    gitRepo: action.gitRepo,
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

export default createStore(initReducer, composeWithDevTools());