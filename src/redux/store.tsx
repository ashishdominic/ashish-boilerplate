//store.tsx
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@/redux/features/users/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Create a configuration for persisting the user slice
const userPersistConfig = {
  key: 'user', // Key under which the user data will be stored in storage
  storage, // The storage medium you want to use (e.g., local storage)
};

// Create a persisted reducer for the user slice
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
    reducer: {
        //user: userReducer
        user: persistedUserReducer,
    }
})
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
//export default store;
export { store, persistor };