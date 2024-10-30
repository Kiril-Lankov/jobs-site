import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authApi } from './features/auth/authApiSlice';
import authReducer from './features/auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware),
});


export const persistor = persistStore(store);
