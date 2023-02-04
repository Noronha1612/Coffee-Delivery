declare type ReducerAction<Actions, Payload = Record<string, unknown>> = {
  type: Actions;
  payload?: Payload;
};
