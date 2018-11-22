## Test case for firestore emulator timeouts.

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