import { createStandardAction, createAction } from "typesafe-actions";

export const action = <T extends string>(type: T) => <P>() =>
  createAction(type, resolve => {
    return (payload: P, meta?: { requestId?: number }) =>
      resolve(payload, {
        requestId: Math.ceil(Math.random() * 1000000),
        ...meta
      });
  });

export interface LoadedLoadable<T> {
  state: "LOADED";
  more?: FailedLoadable | PendingLoadable;
  item: T;
}
export interface FailedLoadable {
  state: "FAILED";
  message: string;
}
export interface PendingLoadable {
  state: "PENDING";
}

export type Loadable<T> = LoadedLoadable<T> | FailedLoadable | PendingLoadable;

// export type LoadableContainer<T> = LoadedLoadable<{
//   [id: string]: Loadable<T>;
// }>;

export const LoadableFactory = {
  pending: () => ({ state: "PENDING" } as PendingLoadable),
  failed: (message: string) => ({ state: "FAILED", message } as FailedLoadable),
  loaded: <T>(item: T) => ({ state: "LOADED", item } as LoadedLoadable<T>)
};

export interface LoadableContainer<T extends { id: string }> {
  pendingRequests: number[];
  errors: { [requestId: number]: string };

  items: {
    [k: string]: Loadable<T>;
  };

  clearError(
    this: LoadableContainer<T>,
    requestId: number
  ): LoadableContainer<T>;
  clearErrors(this: LoadableContainer<T>): LoadableContainer<T>;

  request(
    this: LoadableContainer<T>,
    action: { meta: { requestId: number } }
  ): LoadableContainer<T>;
  requestOne(
    this: LoadableContainer<T>,
    action: { meta: { requestId: number }; payload: { id: string } }
  ): LoadableContainer<T>;

  receive(
    this: LoadableContainer<T>,
    action: { meta: { requestId: number }; payload: { [id: string]: T } }
  ): LoadableContainer<T>;

  fail(
    this: LoadableContainer<T>,
    action: {
      meta: { requestId: number };
      payload: { request?: { id?: string }; message: string };
    }
  ): LoadableContainer<T>;
}

export const makeLoadableContainer = <
  T extends { id: string }
>(): LoadableContainer<T> => ({
  pendingRequests: [],
  errors: {},
  items: {},
  clearError(requestId) {
    const { [requestId]: removed, ...errors } = this.errors;
    return {
      ...this,
      errors
    };
  },
  clearErrors() {
    return { ...this, errors: {} };
  },

  fail(action) {
    let items = this.items;
    if (
      action.payload.request &&
      typeof action.payload.request.id === "string"
    ) {
      items = {
        ...items,
        [action.payload.request.id]: LoadableFactory.failed(
          action.payload.message
        )
      };
    }
    return {
      ...this,
      pendingRequests: this.pendingRequests.filter(
        x => x !== action.meta.requestId
      ),
      errors: {
        ...this.errors,
        [action.meta.requestId]: action.payload.message
      },
      items: {
        ...items
      }
    };
  },

  request({ meta: { requestId } }) {
    return {
      ...this,
      pendingRequests: this.pendingRequests.concat([requestId])
    };
  },
  requestOne(action) {
    return {
      ...this.request(action),
      items: {
        ...this.items,
        [action.payload.id]: LoadableFactory.pending()
      }
    };
  },

  receive({ meta: { requestId }, payload }) {
    const items: { [k: string]: Loadable<T> } = {};
    for (const id in payload) {
      items[id] = LoadableFactory.loaded(payload[id]);
    }

    return {
      ...this,
      pendingRequests: this.pendingRequests.filter(x => x !== requestId),
      items: {
        ...this.items,
        ...items
      }
    };
  }
});
