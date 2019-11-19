[reducer-todo](../README.md) › [Globals](../globals.md) › ["utils/reducerFunctions"](_utils_reducerfunctions_.md)

# External module: "utils/reducerFunctions"

## Index

### Type aliases

* [CreateReducerParams](_utils_reducerfunctions_.md#createreducerparams)
* [HandlersFunctions](_utils_reducerfunctions_.md#handlersfunctions)
* [HandlersIndex](_utils_reducerfunctions_.md#handlersindex)

### Functions

* [createReducer](_utils_reducerfunctions_.md#const-createreducer)
* [updateItemInArray](_utils_reducerfunctions_.md#const-updateiteminarray)
* [updateObject](_utils_reducerfunctions_.md#const-updateobject)

## Type aliases

###  CreateReducerParams

Ƭ **CreateReducerParams**: *object*

*Defined in [src/utils/reducerFunctions.ts:35](https://github.com/fwesss/reducer-todo/blob/24fbc8d/reducer-todo/src/utils/reducerFunctions.ts#L35)*

#### Type declaration:

* **handlers**: *[HandlersFunctions](_utils_reducerfunctions_.md#handlersfunctions) & [HandlersIndex](_utils_reducerfunctions_.md#handlersindex)*

* **initialState**: *keyof Todo[]*

___

###  HandlersFunctions

Ƭ **HandlersFunctions**: *object*

*Defined in [src/utils/reducerFunctions.ts:17](https://github.com/fwesss/reducer-todo/blob/24fbc8d/reducer-todo/src/utils/reducerFunctions.ts#L17)*

#### Type declaration:

* **ADD_TODO**(): *function*

  * (`todosState`: keyof Todo[], `action`: object): *keyof Todo[]*

* **CLEAR_COMPLETED**(): *function*

  * (`todoState`: keyof Todo[]): *keyof Todo[]*

* **TOGGLE_TODO**(): *function*

  * (`todosState`: keyof Todo[], `action`: object): *keyof object[]*

___

###  HandlersIndex

Ƭ **HandlersIndex**: *object*

*Defined in [src/utils/reducerFunctions.ts:31](https://github.com/fwesss/reducer-todo/blob/24fbc8d/reducer-todo/src/utils/reducerFunctions.ts#L31)*

#### Type declaration:

* \[ **key**: *string*\]: any

## Functions

### `Const` createReducer

▸ **createReducer**(`__namedParameters`: object): *(Anonymous function)*

*Defined in [src/utils/reducerFunctions.ts:40](https://github.com/fwesss/reducer-todo/blob/24fbc8d/reducer-todo/src/utils/reducerFunctions.ts#L40)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`handlers` | object & object |
`initialState` | ReadonlyArray‹object› |

**Returns:** *(Anonymous function)*

___

### `Const` updateItemInArray

▸ **updateItemInArray**(`array`: keyof Todo[], `itemId`: number, `updateItemCallback`: function): *keyof object[]*

*Defined in [src/utils/reducerFunctions.ts:8](https://github.com/fwesss/reducer-todo/blob/24fbc8d/reducer-todo/src/utils/reducerFunctions.ts#L8)*

**Parameters:**

▪ **array**: *keyof Todo[]*

▪ **itemId**: *number*

▪ **updateItemCallback**: *function*

▸ (`todo`: object): *object*

**Parameters:**

▪ **todo**: *object*

Name | Type |
------ | ------ |
`completed` | boolean |

* **completed**: *boolean*

**Returns:** *keyof object[]*

___

### `Const` updateObject

▸ **updateObject**<**T**>(`oldObject`: T, `newValues`: T): *T*

*Defined in [src/utils/reducerFunctions.ts:3](https://github.com/fwesss/reducer-todo/blob/24fbc8d/reducer-todo/src/utils/reducerFunctions.ts#L3)*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`oldObject` | T |
`newValues` | T |

**Returns:** *T*
