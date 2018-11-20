import { actions } from "@src/actions";
import { Epic } from "@src/types";
import { filter, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";

export const {{camelCase name}}: Epic = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf( /* Enter action here */)),
    switchMap(async a => {
      /*
        Enter tasks here
      */
    })
  );
