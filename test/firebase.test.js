
const { expect, describe, it } = global
const fs = require('fs')
const firebase = require('@firebase/testing')
const { toRead, toUpdate, toCreate, toDelete } = require('./expect-rw')
const RULES = fs.readFileSync(`${__dirname}/firestore.rules`, 'utf8')
let i = 0
const ALLOW = '/__reflect/allow'
const DENY = '/__reflect/deny'

async function initApp (auth, projectId = `project-${i++}`) {
  const start = new Date()
  await firebase.loadFirestoreRules({ projectId, rules: RULES })
  console.log(`Rules loaded in ${new Date() - start} ms`)
  const initDate = new Date()
  const app = await firebase.initializeTestApp({ projectId, auth })
  console.log(`App initialized in ${new Date() - initDate} ms`)
  return app 
}

expect.extend({ toRead, toCreate, toUpdate, toDelete })

describe('firebase emulator', () => {
  it('does not time out', async () => {
    const app = await initApp({ uid: 'uid-0' })
    await expect(app).toRead(ALLOW)
    await expect(app).toDelete(ALLOW)
  })

  it('does not time out 2', async () => {
    const app = await initApp({ uid: 'uid-0' })
    await expect(app).toRead(ALLOW)
    await expect(app).toCreate(ALLOW)
  })

  it('does not time out 3', async () => {
    const app = await initApp({ uid: 'uid-0' })
    await expect(app).toRead(ALLOW)
    await expect(app).toCreate(ALLOW)
    await expect(app).toDelete(ALLOW)
  })

  it('does not time out 4', async () => {
    const app = await initApp({ uid: 'uid-0' })
    await expect(app).toRead(ALLOW)
    await expect(app).toCreate(ALLOW)
    await expect(app).toCreate(ALLOW)
  })

  it('does not time out 5', async () => {
    const app = await initApp({ uid: 'uid-0' })
    await expect(app).toRead(ALLOW)
    await expect(app).toCreate(ALLOW)
    await expect(app).toCreate(ALLOW)
  })

  it('does not time out 6', async () => {
    const start = new Date()
    const app = await initApp({ uid: 'uid-0' })
    console.log(`Init too ${new Date() - start} ms`)
    await expect(app).toRead(ALLOW)
    await expect(app).not.toCreate(DENY)
    await expect(app).not.toCreate(DENY)
  })
})
