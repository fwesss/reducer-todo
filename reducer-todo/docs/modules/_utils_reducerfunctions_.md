[reducer-todo](../README.md) › [Globals](../globals.md) › ["utils/reducerFunctions"](_utils_reducerfunctions_.md)

# External module: "utils/reducerFunctions"

## Index

### Type aliases

* [CreateReducerParams](_utils_reducerfunctions_.md#createreducerparams)

### Functions

* [createReducer](_utils_reducerfunctions_.md#createreducer)
* [updateItemInArray](_utils_reducerfunctions_.md#const-updateiteminarray)
* [updateObject](_utils_reducerfunctions_.md#const-updateobject)

## Type aliases

###  CreateReducerParams

Ƭ **CreateReducerParams**: *object*

*Defined in [src/utils/reducerFunctions.ts:20](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/utils/reducerFunctions.ts#L20)*

#### Type declaration:

* **handlers**: *[HandlersFunctions](_interfaces_handlers_.md#handlersfunctions) & [HandlersIndex](_interfaces_handlers_.md#handlersindex)*

* **initialState**: *keyof Todo[]*

## Functions

###  createReducer

▸ **createReducer**(`__namedParameters`: object): *reducer*

*Defined in [src/utils/reducerFunctions.ts:25](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/utils/reducerFunctions.ts#L25)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`handlers` | object & object |
`initialState` | ReadonlyArray‹object› |

**Returns:** *reducer*

___

### `Const` updateItemInArray

▸ **updateItemInArray**(`array`: keyof Todo[], `itemId`: number, `updateItemCallback`: function): *keyof object[]*

*Defined in [src/utils/reducerFunctions.ts:8](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/utils/reducerFunctions.ts#L8)*

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

*Defined in [src/utils/reducerFunctions.ts:4](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/utils/reducerFunctions.ts#L4)*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`oldObject` | T |
`newValues` | T |

**Returns:** *T*
