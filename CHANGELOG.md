# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `defaultChecked` prop to set the initial state of an uncontrolled checkbox without wiring up `isChecked` ([#815](https://github.com/kuraydev/react-native-bouncy-checkbox/issues/815)).
- Built-in accessibility: the touchable now exposes `accessibilityRole="checkbox"` and `accessibilityState={{ checked }}` (still overridable via props). Improves screen-reader and `react-native-web` semantics ([#103](https://github.com/kuraydev/react-native-bouncy-checkbox/issues/103)).
- A real Jest + `@testing-library/react-native` test suite covering rendering, built-in/controlled state, `onPress`/`onLongPress` payloads, the imperative `ref` handle, and custom `textComponent`/`iconComponent`.
- GitHub Actions CI (`typecheck`, `lint`, `test`, `build` on a Node 18/20/22 matrix) and a `semantic-release` release workflow.
- Repo hygiene: `CHANGELOG.md`, `CONTRIBUTING.md`, issue forms, and a pull-request template.
- `peerDependencies` for `react` (`>=16.8.0`) and `react-native` (`>=0.63.0`).
- Modern package entry points: `exports` map, `module`, `react-native`, `source`, `types`, and a `files` allowlist.

### Changed

- **Build is now produced by [`react-native-builder-bob`](https://github.com/callstack/react-native-builder-bob)** (CommonJS + ESM + TypeScript targets) instead of a hand-rolled `tsc + cpx` step. Published output moved from `build/dist/*` to `build/{commonjs,module,typescript}/*`. The default export and the bare `import BouncyCheckbox from "react-native-bouncy-checkbox"` entry are unchanged.
- Internal style factories in `BouncyCheckbox.style.ts` are no longer registered as fake `StyleSheet` entries; static styles use `StyleSheet.create` and dynamic styles are computed from typed helpers, removing per-render churn.
- The animation `Animated.Value` is held in a `useRef` instead of `useState`; render callbacks are memoized.
- Tightened types: removed the invalid `Callback<any>` generic in `useStateWithCallback`, which is now fully generic, and documented the open `ImageComponent`/`TouchableComponent` component props.

### Fixed

- The bundled **default check icon now renders on `react-native-web`** (some users also saw it blank on Android). On web the check `Image` is given explicit dimensions and `resizeMode: "contain"`, so the default tick is visible without the old workaround of passing a custom `checkIconImageSource`. The guard is web-only (`Platform.OS === "web"`), so iOS/Android rendering is byte-for-byte unchanged ([#103](https://github.com/kuraydev/react-native-bouncy-checkbox/issues/103)).
- Removed an accidental self-dependency on `react-native-bouncy-checkbox` in `dependencies`.
- Removed the unused runtime dependency `@freakycoder/react-native-bounceable` (the library never imported it); the package now ships with **zero runtime dependencies**.
- Corrected README factual errors: real prop name `unFillColor`, `useBuiltInState` default `true`, `fillColor` default `#ffc484`, documented `iconImageStyle`, removed references to the long-removed `disableBuiltInState` prop, and fixed example imports to use the package name.

### Removed

- Dead/abandoned dev dependencies: `@types/react-native` (deprecated stub), `react-native-typescript-transformer`, `prettier-format`, `npm-post-install`, `cpx`, and unused `@react-native/*` config/metro packages.

## [4.1.4] - 2026-01-07

- Expo doctor New Architecture compatibility metadata; example app upgraded to Expo 53.

[Unreleased]: https://github.com/kuraydev/react-native-bouncy-checkbox/compare/v4.1.4...HEAD
[4.1.4]: https://github.com/kuraydev/react-native-bouncy-checkbox/releases/tag/v4.1.4
