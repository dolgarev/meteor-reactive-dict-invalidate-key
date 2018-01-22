import { ReactiveDict } from 'meteor/reactive-dict'
import { Tinytest } from 'meteor/tinytest'
import { Tracker } from 'meteor/tracker'

const dict = new ReactiveDict({ key1: 123, key2: 456, key3: 789 })

Tinytest.addAsync('reactive-dict-invalidate-key - invalidate one key', function (test, onComplete) {
  Tracker.autorun(c => {
    const key1 = dict.get('key1')
    if (!c.firstRun) {
      c.stop()
      test.equal(key1, 123)
      onComplete()
    }
  })
  dict.invalidateKey('key1')
})

Tinytest.addAsync('reactive-dict-invalidate-key - invalidate two key', function (test, onComplete) {
  Tracker.autorun(c => {
    const key2 = dict.get('key2')
    if (!c.firstRun) {
      c.stop()
      test.equal(key2, 456)
      onComplete()
    }
  })
  dict.invalidateKey(['key1', 'key2'])
})

Tinytest.addAsync('reactive-dict-invalidate-key - invalidate all keys', function (test, onComplete) {
  Tracker.autorun(c => {
    const key3 = dict.get('key3')
    if (!c.firstRun) {
      c.stop()
      test.equal(key3, 789)
      onComplete()
    }
  })
  dict.invalidateAllKeys()
})
