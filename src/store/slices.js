import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import mockBuilds from '../mock/builds';

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getBuildsAsync = createAsyncThunk(
    'repoInfo/getBuildsAsync',
    async () => {
        // set 'isLoading' to true where it will be reduced
        const resp = await timeout(6000);
        if (resp.ok) {
            const builds = mockBuilds;
            return { builds }    
        }
    }
)

export const repoSlice = createSlice({
    name: 'repoInfo',
    initialState: {
        repoName: '',
        mainBranch: '',
        buildCommand: '',
        builds: []
    },
    reducers: {
        saveRepoInfo: (state, action) => {
           const { repoName, mainBranch, buildCommand } = action.payload.repoInfo;
           state.repoName = repoName;
           state.mainBranch = mainBranch;
           state.buildCommand = buildCommand; 

           return state;
        }
    },
    extraReducers: {
        [getBuildsAsync.fulfilled] : (state, action) => {
            return action.payload.builds;
        }
    }
});

export const intervalSlice = createSlice({
    name: 'interval',
    initialState: 10,
    reducers: {
        saveInterval: (state, action) => {
            const interval = action.payload.interval;
            state = interval;

            return state;
        }
    }
});

export const isLoadingBuildsSlice = createSlice({
    name: 'isLoadingBuilds',
    initialState: false,
    reducers: {
        toggleIsLoading: (state, action) => {
            const toggledLoading = action.payload.isLoading;
            state = toggledLoading;

            return state;
        }
    }
})

export const { saveRepoInfo } = repoSlice.actions;
export const { saveInterval } = intervalSlice.actions;
export const { toggleIsLoading } = isLoadingBuildsSlice.actions;

export const repoReducer = repoSlice.reducer;
export const intervalReducer = intervalSlice.reducer;
export const isLoadingBuildsReducer = isLoadingBuildsSlice.reducer;