import persistStorage from "redux-persist/es/storage";

export default {
    key: "root",
    keyPrefix: "persist.",
    storage: persistStorage,
};
