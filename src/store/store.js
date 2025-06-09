import { configureStore } from "@reduxjs/toolkit";
import goSubscriptionReducer from "./goSubscription";

const store = configureStore({
  reducer: {
    goSubscription: goSubscriptionReducer,
  },
});

export default store;
