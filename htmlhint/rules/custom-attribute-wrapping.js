// created to cover Angular template formatter
module.exports = function (HTMLHint) {
  HTMLHint.addRule({
    id: 'custom-attribute-wrapping',
    description: `
          Each HTML attribute should be on its own line — unless there is a single attribute declared on the HTML tag. 
          In the case of a single attribute, the tag and attribute will be put on a single line.
      `,
    init: function (parser, reporter) {
      const self = this;
      parser.addListener('tagstart', function (event) {
        const attrs = event.attrs;
        if (attrs.length > 0) {
          for (const attr in attrs) {
            const attrObj = event.attrs[attr];

            if (attrs.length === 1) {
              if (attrObj.raw.startsWith('\n')) {
                reporter
                  .error(
                    `In the case of a single attribute, the tag and attribute will be put on a single line.
                                      [Run stringham.angular-template-formatter extension for autoformatting]`,
                    event.line,
                    event.col,
                    self,
                    event.raw
                  );
                break;
              }
            } else {
              if (!attrObj.raw.startsWith('\n')) {
                reporter
                  .error(
                    `Each HTML attribute should be on its own line — unless there is a single attribute declared on the HTML tag.
                                      [Run stringham.angular-template-formatter extension for autoformatting]`,
                    event.line,
                    event.col,
                    self,
                    event.raw
                  );
                break;
              }
            }
          }
        }
      });
    }
  });
}
