/**
 * singleton noop
 * @param  {any} x any
 * @return {any}   any
 */
const noop = x => x

/**
 * create new noop function
 * @return {function} noop function
 */
const createNoop = () => x => x

module.exports = {
  noop,
  createNoop,
  default: noop,
}
