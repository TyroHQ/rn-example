import { Action, actions } from "@src/actions";
import { getType } from "typesafe-actions";

export interface {{pascalCase name}}State {
}

export const {{camelCase name}}Reducer = function(state: {{pascalCase name}}State, action: Action): {{pascalCase name}}State {
  switch (action.type) {
    case getType(actions./* TODO:  add action to listen to here */):
      return {
        ...state,
        // TODO: make state updates here
        
      };
  }

  // default case
  return state;
};

/**
export type UserState = LoadableContainer<User>;

export const userReducer = function(
  state: UserState = makeLoadableContainer<User>(),
  action: Action
): UserState {
  switch (action.type) {
    case getType(actions.getUserListAsync.request): {
      return {
        ...state,
        more: LoadableFactory.pending()
      };
    }

    case getType(actions.getUserListAsync.success): {
      const users: UserState["item"] = {};
      for (const id in action.payload) {
        users[id] = LoadableFactory.loaded(action.payload[id]);
      }
      return {
        ...state,
        item: {
          ...state.item,
          ...users
        },
        more: undefined
      };
    }

    case getType(actions.getUserListAsync.failure): {
      return {
        ...state,
        more: LoadableFactory.failed(action.payload.error)
      };
    }

    case getType(actions.getUserAsync.request): {
      return {
        ...state,
        item: {
          ...state.item,
          [action.payload.id]: LoadableFactory.pending()
        }
      };
    }

    case getType(actions.getUserAsync.failure): {
      return {
        ...state,
        item: {
          ...state.item,
          [action.payload.request.id]: LoadableFactory.failed(
            action.payload.error
          )
        }
      };
    }

    case getType(actions.getUserAsync.success): {
      const users: UserState["item"] = {};
      for (const id in action.payload) {
        users[id] = LoadableFactory.loaded(action.payload[id]);
      }
      return {
        ...state,
        item: {
          ...state.item,
          ...users
        }
      };
    }
  }

  // default case
  return state;
};

 */