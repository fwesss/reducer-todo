type State = {
  readonly todos: readonly {
    readonly item: string;
    readonly completed: boolean;
    readonly id: number;
  }[];
};

export default State;
