declare type ReducerAction<Actions> = {
  type: Actions;
  payload: Record<string, unknown>;
};
