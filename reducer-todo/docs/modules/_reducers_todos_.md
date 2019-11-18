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

• **todosReducer**: *reducer* =  createReducer([], {
  ADD_TODO: addTodo,
  TOGGLE_TODO: toggleTodo,
  CLEAR_COMPLETED: clearCompleted
})

*Defined in [reducers/todos.ts:30](https://github.com/fwesss/reducer-todo/blob/dca7223/reducer-todo/src/reducers/todos.ts#L30)*

## Functions

### `Const` addTodo

▸ **addTodo**(`todosState`: any, `action`: any): *any*

*Defined in [reducers/todos.ts:13](https://github.com/fwesss/reducer-todo/blob/dca7223/reducer-todo/src/reducers/todos.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`todosState` | any |
`action` | any |

**Returns:** *any*

___

### `Const` appReducer

▸ **appReducer**(`state`: object, `action`: any): *object*

*Defined in [reducers/todos.ts:36](https://github.com/fwesss/reducer-todo/blob/dca7223/reducer-todo/src/reducers/todos.ts#L36)*

**Parameters:**

▪`Default value`  **state**: *object*=  initialState

Name | Type | Default |
------ | ------ | ------ |
`todos` | object[] |  [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ] |

▪ **action**: *any*

**Returns:** *object*

* **todos**: *any* =  todosReducer(state.todos, action)

___

### `Const` clearCompleted

▸ **clearCompleted**(`todoState`: any): *any*

*Defined in [reducers/todos.ts:25](https://github.com/fwesss/reducer-todo/blob/dca7223/reducer-todo/src/reducers/todos.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`todoState` | any |

**Returns:** *any*

___

### `Const` toggleTodo

▸ **toggleTodo**(`todosState`: any, `action`: any): *any*

*Defined in [reducers/todos.ts:20](https://github.com/fwesss/reducer-todo/blob/dca7223/reducer-todo/src/reducers/todos.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`todosState` | any |
`action` | any |

**Returns:** *any*

## Object literals

### `Const` initialState

### ▪ **initialState**: *object*

*Defined in [reducers/todos.ts:3](https://github.com/fwesss/reducer-todo/blob/dca7223/reducer-todo/src/reducers/todos.ts#L3)*

###  todos

• **todos**: *object[]* =  [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]

*Defined in [reducers/todos.ts:4](https://github.com/fwesss/reducer-todo/blob/dca7223/reducer-todo/src/reducers/todos.ts#L4)*
