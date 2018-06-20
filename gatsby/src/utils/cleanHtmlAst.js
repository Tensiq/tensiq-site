import visit from 'unist-util-visit';
import remove from 'unist-util-remove';

const cleanHtmlAst = htmlAst => {
  remove(htmlAst, node => {
    return node.type === 'text' && /^\n*$/.test(node.value);
  });
  visit(
    htmlAst,
    (node, index, parent) => {
      return (
        node.type === 'text' &&
        !(parent.type === 'element' && parent.tagName === 'text')
      );
    },
    node => {
      node.type = 'element';
      node.tagName = 'text';
      node.children = [{ type: 'text', value: node.value }];
      node.value = null;
      return visit.SKIP;
    },
  );
  visit(
    htmlAst,
    (node, index, parent) => {
      return (
        node.type === 'element' &&
        node.tagName === 'text' &&
        parent.type === 'element' &&
        parent.tagName === 'p'
      );
    },
    node => {
      node.type = 'element';
      node.tagName = 'text-block';
      return visit.SKIP;
    },
  );
  return htmlAst;
};

export default cleanHtmlAst;
