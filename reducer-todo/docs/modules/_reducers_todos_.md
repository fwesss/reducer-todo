[reducer-todo](../README.md) › [Globals](../globals.md) › ["reducers/todos"](_reducers_todos_.md)

# External module: "reducers/todos"

## Index

### Variables

* [todosReducer](_reducers_todos_.md#const-todosreducer)

### Functions

* [addTodo](_reducers_todos_.md#const-addtodo)
* [appReducer](_reducers_todos_.md#const-appreducer)
* [clearCompleted](_reducers_todos_.md#const-clearcompleted)
* [toggleTodo](_reducers_todos_.md#const-toggletodo)

### Object literals

* [initialState](_reducers_todos_.md#const-initialstate)

## Variables

### `Const` todosReducer

• **todosReducer**: *reducer* =  createReducer({
  initialState: [],
  handlers: {
    ADD_TODO: addTodo,
    TOGGLE_TODO: toggleTodo,
    CLEAR_COMPLETED: clearCompleted
  }
})

*Defined in [src/reducers/todos.ts:38](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/reducers/todos.ts#L38)*

## Functions

### `Const` addTodo

▸ **addTodo**(`todosState`: keyof Todo[], `action`: object): *keyof Todo[]*

*Defined in [src/reducers/todos.ts:15](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/reducers/todos.ts#L15)*

**Parameters:**

▪ **todosState**: *keyof Todo[]*

▪ **action**: *object*

Name | Type |
------ | ------ |
`id` | number |
`item` | string |

**Returns:** *keyof Todo[]*

___

### `Const` appReducer

▸ **appReducer**(`state`: [State](_interfaces_state_.md#state), `action`: object): *[State](_interfaces_state_.md#state)*

*Defined in [src/reducers/todos.ts:47](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/reducers/todos.ts#L47)*

**Parameters:**

▪`Default value`  **state**: *[State](_interfaces_state_.md#state)*=  initialState

▪ **action**: *object*

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *[State](_interfaces_state_.md#state)*

___

### `Const` clearCompleted

▸ **clearCompleted**(`todoState`: keyof Todo[]): *keyof Todo[]*

*Defined in [src/reducers/todos.ts:33](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/reducers/todos.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`todoState` | keyof Todo[] |

**Returns:** *keyof Todo[]*

___

### `Const` toggleTodo

▸ **toggleTodo**(`todosState`: keyof Todo[], `action`: object): *keyof object[]*

*Defined in [src/reducers/todos.ts:25](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/reducers/todos.ts#L25)*

**Parameters:**

▪ **todosState**: *keyof Todo[]*

▪ **action**: *object*

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *keyof object[]*

## Object literals

### `Const` initialState

### ▪ **initialState**: *object*

*Defined in [src/reducers/todos.ts:5](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/reducers/todos.ts#L5)*

###  todos

• **todos**: *object[]* =  [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]

*Defined in [src/reducers/todos.ts:6](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/reducers/todos.ts#L6)*
