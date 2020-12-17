import commonjs from 'rollup-plugin-commonjs'
import resolve  from 'rollup-plugin-node-resolve'

export default {
  external: ['gm','request'],
  plugins: [
    resolve(),
    commonjs()
  ]
}
