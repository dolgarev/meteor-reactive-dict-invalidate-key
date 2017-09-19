# meteor-reactive-dict-invalidate-key

A new method ```invalidateKey``` for [```ReaсtiveDict```](https://atmospherejs.com/meteor/reactive-dict) invalidates one key in the dictionary without changing its value.

```js
...
this.componentState = new ReactiveDict()
this.componentState.set('title', 'test')
...
this.componentState.invalidateKey('title')

```
