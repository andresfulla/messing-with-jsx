/**
 * A number, or a string containing a number.
 * @typedef {Object} VNode
 * @property {string} nodeName
 * @property {Object.<string>} attributes
 * @property {Object} children
 */

/**
 * This function simply renders a JSX tree
 *
 * @param {VNode} vnode
 * @returns
 */
function renderer(vnode) {
  // creates a DOM element
  if (vnode.split) return document.createTextNode(vnode);
  let newElem = document.createElement(vnode.nodeName); // grabs and sets all attributes to the new DOM element

  let attributes = vnode.attributes || {};
  Object.keys(attributes).forEach(attr => {
    newElem.setAttribute(attr, attributes[attr]);
  }); // recursion for every fild it has

  const children = vnode.children || [];
  children.forEach(child => {
    const childElem = renderer(child);
    newElem.appendChild(childElem);
  });
  return newElem;
}

const title = h("h1", null, "Cosas locas");
const element = h("div", null, title);
let dom = renderer(element);
document.body.appendChild(dom);
/**
 * Transforms a JSX set of parms into a VNode elem
 *
 * @param {string} nodeName
 * @param {Object} attributes
 * @param {Array<string|VNode>} args
 * @returns {VNode}
 */

function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  console.log(children);
  return {
    nodeName,
    attributes,
    children
  };
}
