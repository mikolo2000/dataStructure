/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

 function treeToArray(tree,array){
        if (tree ===  null ){
            return;
        }
        array.push(tree.val);
        if (tree.left !== null){
            treeToArray(tree.left,array);
        }
        else if(tree.left=== null && tree.right!==null){
            array.push(null)
        }
        if(tree.right !==null){
            treeToArray(tree.right,array);
        }
    }
var isSameTree = function(p, q) {
    let arrayP = [];
    let arrayQ = [];
    treeToArray(p,arrayP);
    treeToArray(q,arrayQ);
    
    if(JSON.stringify(arrayP) === JSON.stringify(arrayQ)){
        return true;
    }else{
        return false;
    }
};