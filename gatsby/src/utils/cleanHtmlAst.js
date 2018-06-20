import visit from 'unist-util-visit';
import remove from 'unist-util-remove';
import u from 'unist-builder';

const cleanHtmlAst = htmlAst => {
  remove(htmlAst, node => {
    return node.type === 'text' && /^\n*$/.test(node.value);
  });
  visit(
    htmlAst,
    (node, index, parent) => {
      return (
        node.type === 'text' &&
        !(
          parent.type === 'element' &&
          (parent.tagName === 'text' ||
            parent.tagName === 'strong' ||
            parent.tagName === 'em' ||
            parent.tagName.startsWith('h'))
        )
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
        node.tagName === 'p' &&
        parent.type === 'root'
      );
    },
    (node, index, parent) => {
      const others = node.children.filter(
        child =>
          !(child.tagName === 'text') &&
          !(child.tagName === 'strong') &&
          !(child.tagName === 'em') &&
          !(child.tagName === 'icon'),
      ).length;
      if (!others && node.children.length > 1) {
        node.tagName = 'text';
        parent.children[parent.children.indexOf(node)] = u(
          'element',
          { tagName: 'view' },
          [node],
        );
      } else {
        node.tagName = 'view';
      }
      return visit.SKIP;
    },
  );
  return htmlAst;
};

export default cleanHtmlAst;
