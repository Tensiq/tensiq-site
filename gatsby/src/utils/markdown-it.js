const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js/lib/highlight');
const javascript = require('highlight.js/lib/languages/javascript');

hljs.registerLanguage('javascript', javascript);

exports.options = {
  html: false,
  xhtmlOut: false,
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
        );
      } catch (__) {}
    }
    return (
      '<pre class="hljs"><code>' +
      MarkdownIt.utils.escapeHtml(str) +
      '</code></pre>'
    );
  },
};

const container = function(marker) {
  return {
    marker: marker,
    validate: function(params) {
      return params.trim().match(/^flex\s+(.*)$/);
    },

    render: function(tokens, idx) {
      var config = tokens[idx].info.trim().match(/^flex\s+(.*)$/);
      if (config) {
        return '<div ' + config[1] + '>';
      } else {
        return '</div>';
      }
    },
  };
};

exports.plugins = function() {
  return [
    [require('markdown-it-front-matter'), function() {}],
    [require('markdown-it-attrs')],
    [require('markdown-it-container'), 'flex', container(':')],
    [require('markdown-it-container'), 'flex', container('$')],
  ];
};

exports.container = container;

module.exports = exports;
