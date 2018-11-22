
const firebase = require('@firebase/testing')

/**
 * Generalization of the assert/deny.
 */
async function expectFn (app, resource, fn, ...args) {
  try {
    await firebase.assertSucceeds(
      app.firestore().doc(resource)[fn](...args)
    )
  } catch (err) {
    return {
      pass: false,
      message: () => `User 👼 cannot ${fn} ${resource}: ${err}`
    }
  }
  return {
    pass: true,
    message: () => `User 👼 can ${fn} ${resource}.`
  }
}

/**
 * @param {Firebase.TestApp} app for the user
 * @param {string} resource
 */
async function toRead (app, resource) {
  return expectFn(app, resource, 'get')
}

async function toUpdate (app, resource, value = {}) {
  return expectFn(app, resource, 'update', value)
}

async function toCreate (app, resource, value = {}) {
  return expectFn(app, resource, 'set', value)
}

async function toDelete (app, resource) {
  return expectFn(app, resource, 'delete')
}

module.exports = {
  toRead, toUpdate, toCreate, toDelete
}
