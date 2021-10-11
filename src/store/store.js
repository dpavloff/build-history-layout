import { configureStore } from '@reduxjs/toolkit';
import { repoReducer, intervalReducer, isLoadingBuildsReducer } from './slices';

export default configureStore({
    reducer: {
        repoInfo: repoReducer,
        interval: intervalReducer,
        isLoadingBuilds: isLoadingBuildsReducer
    },
});
