import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootReducer from "Reducers";
import rootSaga from "Sagas";
import persistConfig from "./persistConfig";

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
    const store = createStore(
        persistedReducer,
        applyMiddleware(sagaMiddleware, logger),
    );

    sagaMiddleware.run(rootSaga);

    const persist = persistStore(store);

    return { store, persist };
}
