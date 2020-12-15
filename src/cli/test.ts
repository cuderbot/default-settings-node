import {Command, flags} from '@oclif/command'

export default class Test extends Command {
  static description = 'Ejecuta `jest` para correr los test'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Test)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/cuder/workspace/cuder/default-settings/src/commands/test.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
