import { Epic } from "@src/types/Epic";
import { combineEpics } from "redux-observable";

export const rootEpic: Epic = combineEpics(
    /* add epics here */
    // getSample1,
    // getSample2,
);
