/**
 * A number, or a string containing a number.
 * @typedef {Object} VNode
 * @property {string} nodeName
 * @property {Object.<string>} attributes
 * @property {Object} children
 */

/**
 * This function transforms a virtual DOM tree into a DOM tree
 *
 * @param {VNode} vnode
 * @returns
 */
export function renderer(vnode) {
  // creates a DOM element
  if (vnode.split) return document.createTextNode(vnode)
  let newElem = document.createElement(vnode.nodeName)
  // grabs and sets all attributes to the new DOM element
  let attributes = vnode.attributes || {} 
  Object.keys(attributes).forEach((attr) => {
    newElem.setAttribute(attr, attributes[attr])
  });
  // recursion for every fild it has
  const children = (vnode.children || [])
  children.forEach(child => {
    const childElem = renderer(child)
    newElem.appendChild(childElem)
  })

  return newElem
}