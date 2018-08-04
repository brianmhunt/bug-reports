
const {expect} = require('chai')

const test = require('firebase-functions-test')()
const functions = require('firebase-functions')

/**
 * This is testing the event callback in a test context.
 * 
 * Noting the `eventContextOptions` comment at:
 * 
 * https://firebase.google.com/docs/functions/unit-testing#testing_background_non_http_functions
 * 
 * "specify auth and auth Type (for real time database functions only)"
 * 
 * This test fails accordingly.
 */
it('Firestore callback includes uid', async () => {
  let calledUid

  const checkAuth = functions.firestore
    .document('/any/document')
    .onWrite((_, context) => {
      // Fails with "Cannot read property 'uid' of undefined"
      calledUid = context.auth.uid
    })

  const wrapped = test.wrap(checkAuth, {auth: {uid: 'u1'}})

  wrapped({} /*, event context */)
  expect(calledUid).to.equal('u1')
})
