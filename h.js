/**
 * Transforms a JSX set of parms into a VNode elem
 *
 * @param {string} nodeName
 * @param {Object} attributes
 * @param {Array<string|VNode>} args
 * @returns {VNode}
 */
function h(nodeName, attributes, ...args) {
  if(typeof nodeName === 'function') {
    return nodeName({...attributes, children: args})
  }
  let children = args.length ? [].concat(...args) : null;
	return { nodeName, attributes, children };
}

window.h = h
