# meteor-reactive-dict-invalidate-key

A new method ```invalidateKey``` and ```invalidateAllKeys``` for [```ReaсtiveDict```](https://atmospherejs.com/meteor/reactive-dict) invalidates one or some keys in the dictionary without changing their values.

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
