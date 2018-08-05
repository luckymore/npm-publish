const validator = require('common-validator')
const assert = require('assert')

describe('Validator', function () {
  describe('#isEmail', function () {
    it('should return true when the string is an email address', function () {
      if (validator.isEmail('939431620@qq.com') !== true) {
        throw new Error('Validator not right')
      }
    })
  })
})