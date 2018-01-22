# meteor-reactive-dict-invalidate-key

A new method ```invalidateKey``` for [```ReaсtiveDict```](https://atmospherejs.com/meteor/reactive-dict) invalidates one key in the dictionary without changing its value.

```js
...
this.componentState = new ReactiveDict()
this.componentState.set('title', 'test')
this.componentState.set('description', 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.')
...
this.componentState.invalidateKey('title') // invalidate one key
this.componentState.invalidateKey(['title', 'description']) // invalidate some keys
this.componentState.invalidateAllKeys() // invalidate all keys

```
