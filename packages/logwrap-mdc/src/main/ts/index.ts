import Mdc from './Mdc'
import { ILogEntry } from '@qiwi/logwrap-core/target/es5/interface'
import { IMdcOpts } from './interface'

export default (opts?: IMdcOpts) => {
  const _opts = opts || {}
  const mdc = new Mdc(_opts)

  return (entry: ILogEntry) => {
    Object.defineProperty(entry.meta, 'trace', {
      get () {
        return mdc.get()
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      set () {},
    })

    return entry
  }
}

export { Mdc }
