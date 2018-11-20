import { Action } from "@src/actions";
import { API } from "@src/api/interface";
import { State } from "@src/store";
import { Epic as RXEpic } from "redux-observable";

interface Deps {
  api: API;
}

export type Epic<T extends Action = Action> = RXEpic<Action, T, State, Deps>;
