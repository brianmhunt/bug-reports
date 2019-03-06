/**
 * This is a trivial module to convert .svg files from FontAwesome
 * into imports, so we can use e.g.
 *
 *    import abacus from 'icons/light/abacus'
 *
 * By convention the SVG is on the first line, so we ignore the other
 * lines.
 */
module.exports = function (source) {
  if (this.cacheable) { this.cacheable() }
  return `
    const element = <div>hey</div>;
    export default element`
  // return `export default ${source.split('\n').shift()}`
  // return `module.exports = `
  // return `module.exports = ${source.split('\n').shift()}`
}
