// modification of https://github.com/htmlhint/HTMLHint/blob/develop/src/rules/id-class-value.js
// created for ignoring binding values in template
module.exports = function (HTMLHint) {
  HTMLHint.addRule({
    id: 'custom-id-class-value',
    description:
      'The id and class attribute values must meet the specified rules.',
    init: function (parser, reporter, options) {
      var getRegExPart = (separator) => `([a-z\\d]+(${separator}[a-z\\d]+)*)`;
      var wrap = (base) => `^${base}$`;

      var underlinePattern = wrap(`${getRegExPart('_')}`);
      var dashPattern = wrap(`${getRegExPart('-')}`);
      var bemPattern = wrap(`${getRegExPart('-')}(--)?${getRegExPart('-')}?(_)?${getRegExPart('-')}?`);

      var self = this;
      var arrRules = {
        underline: {
          regId: new RegExp(underlinePattern),
          message:
            `
            The id and class attribute values must be in lowercase and split by an underscore.
            pattern: ${underlinePattern}
            `
        },
        dash: {
          regId: new RegExp(dashPattern),
          message:
            `
            The id and class attribute values must be in lowercase and split by a dash.
            pattern: ${dashPattern}
            `
        },
        bem: {
          regId: new RegExp(bemPattern),
          message:
            `
            The id and class attribute values must be in lowercase and follow current BEM implementation.
            pattern: ${bemPattern}
            examples:
              block | composite-block
              element | composite-element
              block--element | composite-block--composite-element
              block--element_modificator | composite-block--composite-element_composite-modificator
            `
        },
      },
        rule;

      if (typeof options === 'string') {
        rule = arrRules[options];
      } else {
        rule = options;
      }
      if (rule && rule.regId) {
        var regId = rule.regId,
          message = rule.message;
        parser.addListener('tagstart', function (event) {
          var attrs = event.attrs;
          var attr,
            col = event.col + event.tagName.length + 1;
          for (var i = 0, l1 = attrs.length; i < l1; i++) {
            attr = attrs[i];

            var pattern = /{{.+?}}/g;
            if (pattern.test(attr.value)) {
              attr.value = attr.value.replace(pattern, 'template');
            }
            if (attr.name.toLowerCase() === 'id') {
              if (regId.test(attr.value) === false) {
                reporter.error(
                  message,
                  event.line,
                  col + attr.index,
                  self,
                  attr.raw
                );
              }
            }
            if (attr.name.toLowerCase() === 'class') {
              var arrClass = attr.value.split(/\s+/g);
              var classValue;
              for (var j = 0, l2 = arrClass.length; j < l2; j++) {
                classValue = arrClass[j];
                if (classValue && regId.test(classValue) === false) {
                  reporter.error(
                    message,
                    event.line,
                    col + attr.index,
                    self,
                    classValue
                  );
                }
              }
            }
          }
        });
      }
    }
  });
}
