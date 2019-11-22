export type State = {
  readonly todos: readonly {
    readonly item: string;
    readonly completed: boolean;
    readonly id: number;
  }[];
};

export type Todo = {
  readonly item: string;
  readonly completed: boolean;
  readonly id: number;
};
