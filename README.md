
<div align="center">
    <img src="./header.png" alt="nova" width="75%">
</div>
<br>

[![package downloads](https://img.shields.io/npm/dm/nova-utils.svg?style=flat-square)](https://npmjs.org/package/nova-utils) [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme) [![package license](https://img.shields.io/npm/l/nova-utils.svg?style=flat-square)](https://npmjs.org/package/nova-utils) [![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![nitpicky-code-style](https://img.shields.io/badge/code%20style-nitpicky-7681ED.svg?style=flat-square)](https://github.com/tiaanduplessis/eslint-config-nitpicky)

> modular collection of utilities

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install nova-utils
$ # OR
$ yarn add nova-utils
```

## Usage

```js
import { flatten } from 'nova-utils'
console.log(flatten([1, [2, 3, [4]]]) // [1, 2, 3, 4]
```

Check out the [docs](https://tiaanduplessis.github.io/nova/) for more detail.

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature
4. Submit a pull request

## License

MIT
