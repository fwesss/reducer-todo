[reducer-todo](../README.md) › [Globals](../globals.md) › ["interfaces/Handlers"](_interfaces_handlers_.md)

# External module: "interfaces/Handlers"

## Index

### Type aliases

* [HandlersFunctions](_interfaces_handlers_.md#handlersfunctions)
* [HandlersIndex](_interfaces_handlers_.md#handlersindex)

## Type aliases

###  HandlersFunctions

Ƭ **HandlersFunctions**: *object*

*Defined in [src/interfaces/Handlers.ts:3](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/interfaces/Handlers.ts#L3)*

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

*Defined in [src/interfaces/Handlers.ts:17](https://github.com/fwesss/reducer-todo/blob/580bc2f/reducer-todo/src/interfaces/Handlers.ts#L17)*

#### Type declaration:

* \[ **key**: *string*\]: any
