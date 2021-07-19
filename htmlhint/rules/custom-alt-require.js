// modification of https://github.com/htmlhint/HTMLHint/blob/develop/src/rules/alt-require.js
// created to check [alt] values in template
module.exports = function (HTMLHint) {
  HTMLHint.addRule({
    id: 'custom-alt-require',
    description:
      'The alt attribute of an <img> element must be present and alt attribute of area[href] and input[type=image] must have a value.',
    init: function (parser, reporter) {
      var self = this;
      parser.addListener('tagstart', function (event) {
        var tagName = event.tagName.toLowerCase(),
          mapAttrs = parser.getMapAttrs(event.attrs),
          col = event.col + tagName.length + 1,
          selector;
        if (tagName === 'img' && !(('alt' in mapAttrs) || ('[alt]' in mapAttrs))) {
          reporter.warn(
            'An alt attribute must be present on <img> elements.',
            event.line,
            col,
            self,
            event.raw
          );
        } else if (
          (tagName === 'area' && 'href' in mapAttrs) ||
          (tagName === 'input' && mapAttrs['type'] === 'image')
        ) {
          if (!mapAttrs['alt'] || !mapAttrs['alt']) {
            selector = tagName === 'area' ? 'area[href]' : 'input[type=image]';
            reporter.warn(
              'The alt attribute of ' + selector + ' must have a value.',
              event.line,
              col,
              self,
              event.raw
            );
          }
        }
      });
    }
  });
}
