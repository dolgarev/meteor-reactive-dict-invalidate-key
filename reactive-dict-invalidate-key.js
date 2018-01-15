(function () {
  const proto = ReactiveDict.prototype
  const __invalidateKey = proto.invalidateKey
  if (!(__invalidateKey && __invalidateKey.constructor === Function)) {
    proto.invalidateKey = function (key) {
      const keys = Array.isArray(key) ? key : [key]
      keys.forEach(k => {
        if (this.keyDeps[k]) {
          this.keyDeps[k].changed()
        }
      })
    }
  }

  const __invalidateAllKeys = proto.invalidateAllKeys
  if (!(__invalidateAllKeys && __invalidateAllKeys.constructor === Function)) {
    proto.invalidateAllKeys = function () {
      const allKeys = Object.keys(this.keys)
      this.invalidateKey(allKeys)
    }
  }
})()
