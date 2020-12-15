import {Command, flags} from '@oclif/command'

export default class Lint extends Command {
  static description = 'Ejecuta `eslint` para analizar y corregir problemas'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    fix: flags.boolean({char: 'f', description: 'corrige los problemas señalados'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Lint)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/cuder/workspace/cuder/default-settings/src/commands/lint.ts`)
    if (args.file && flags.fix) {
      this.log(`you input --fix and --file: ${args.file}`)
    }
  }
}
