# Contributing

Thanks for your interest in improving **react-native-bouncy-checkbox**! 🎉

## Development setup

```sh
git clone https://github.com/kuraydev/react-native-bouncy-checkbox.git
cd react-native-bouncy-checkbox
npm install
```

The library source lives in [`lib/`](./lib). It is a pure-JS React Native
component (no native modules), so it works on iOS, Android, the New Architecture
(Fabric), `react-native-web`, and Expo without any extra setup.

## Useful scripts

| Script              | What it does                                             |
| ------------------- | -------------------------------------------------------- |
| `npm run typecheck` | Type-checks the project with `tsc --noEmit`.             |
| `npm run lint`      | Runs ESLint (flat config) over `lib/`.                   |
| `npm test`          | Runs the Jest + Testing Library suite.                   |
| `npm run build`     | Builds CJS + ESM + type defs with `react-native-builder-bob`. |
| `npm run format`    | Formats source with Prettier.                            |

Please make sure `typecheck`, `lint`, `test`, and `build` all pass before
opening a pull request. CI runs the same commands on Node 18/20/22.

## Commit & PR conventions

- This repo uses **[Conventional Commits](https://www.conventionalcommits.org/)**
  (enforced by commitlint). Examples: `feat: add defaultChecked prop`,
  `fix: web check icon rendering`, `docs: correct props table`.
- Releases are automated via `semantic-release` from the commit history, so your
  commit type determines the version bump.

## Backwards compatibility

This is a widely-used published package. **Do not** rename public props, change
runtime default values, or alter the imperative `ref` API
(`onCheckboxPress` / `onCheckboxLongPress`) without flagging the change as
**breaking** in your PR. When in doubt, fix the docs to match the code rather
than the other way around.

## Adding tests

New props and bug fixes should come with a test in
[`lib/__tests__`](./lib/__tests__). Render with `@testing-library/react-native`
and assert against accessibility state / callbacks rather than internals.
