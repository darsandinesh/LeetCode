/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {

    let result = [];
    function traversal(node) {
        if (!node) return result;
        traversal(node.left);
        traversal(node.right);
        result.push(node.val);
    }
    traversal(root);
    return result;

};