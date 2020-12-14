default-settings
================
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/default-settings.svg)](https://npmjs.org/package/default-settings)
[![CircleCI](https://circleci.com/gh/cuderbot/default-settings-node/tree/master.svg?style=shield)](https://circleci.com/gh/cuderbot/default-settings-node/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/default-settings.svg)](https://npmjs.org/package/default-settings)
[![License](https://img.shields.io/npm/l/default-settings.svg)](https://github.com/cuderbot/default-settings-node/blob/master/package.json)

CLI que permite utilizar `eslint` y `prettier` con configuraciones de estilo por defecto o que me gustan :3

Este repositorio basicamente nació, del aburrimiento de tener que configurar un proyecto con cada herramienta,
para que el codigo siga un estandar.

Al cabo de un tiempo de haber comenzado en este proyecto, encontre herramientas que servian a este problema,
pero ya me habia empezado a gustar la idea en si. 

¡Ojo!
El plan no es darle un soporte continuo, ni mucho menos.


<!-- toc -->
### Tabla de contenidos
* [Como funciona](#como-funciona)
* [Instalacion](#instalacion)
* [Comandos](#comandos)
<!-- tocstop -->
<!-- comoFuncionaStop -->
# Como funciona

La idea es de agrupar todas las configuraciones y plugins que se requieren para eslint,
prettier, entre otras herramientas de desarrollo.
<!-- comoFuncionaStop -->
# Instalacion
<!-- instalacion -->
```sh-session
$ npm install -g default-settings
$ default [COMMAND]
running command...
$ default (-v|--version|version)
default-settings/0.0.1 linux-x64 node-v15.1.0
$ default --help [COMMAND]
USAGE
  $ default [COMMAND]
...
```
<!-- instalacionStop -->
# Comandos
<!-- comandos -->
* [`default hello [FILE]`](#default-hello-file)
* [`default help [COMMAND]`](#default-help-command)

## `default hello [FILE]`

describe the command here

```
USAGE
  $ default hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ default hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/cuderbot/default-settings-node/blob/v0.0.1/src/commands/hello.ts)_

## `default help [COMMAND]`

display help for default

```
USAGE
  $ default help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- comandosStop -->
