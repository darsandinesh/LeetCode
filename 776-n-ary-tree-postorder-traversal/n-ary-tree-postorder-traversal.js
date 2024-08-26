/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {

    let arr = [];
    function traversal(root) {
        if (root) {
            if (root.children) {
                for (let node of root.children) {
                    traversal(node);
                }
            }
            arr.push(root.val)
        }
    }
    traversal(root);
    return arr;

};