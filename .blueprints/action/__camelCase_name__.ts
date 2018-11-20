import { createStandardAction as action } from "typesafe-actions";

// TODO: only use EITHER standard action OR async action

// standard action
export const {{camelCase name}} = action("{{upperSnakeCase name}}")<{
  payload: string;
}>();

// async action
export const {{camelCase name}} = {
  request: action("{{upperSnakeCase name}}/REQUEST")<{}>(),
  success: action("{{upperSnakeCase name}}/SUCCESS")<{}>(),
  failure: action("{{upperSnakeCase name}}/FAILURE")<{
    error: string;
    request: {};
  }>()
};
