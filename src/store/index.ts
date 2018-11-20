import { combineReducers } from "redux";
// import { sampleReducer, SampleState } from "./sample";

export interface State {
  // readonly sample: SampleState;
}

export const reducer = combineReducers<State>({
  // sample: sampleReducer
});
