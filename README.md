## Test case for firestore emulator timeouts.

See: [firebase/firebase-js-sdk#1396](https://github.com/firebase/firebase-js-sdk/issues/1396)

Setup:

```bash
$ yarn install
$ yarn run firebase setup:emulators:firestore
```

Start emulator:

```bash
$ yarn run firebase serve --only firestore
```

Run tests:

```bash
$ yarn test
```
