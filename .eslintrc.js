module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: ['jsx-a11y', 'fp'],
  rules: {
    // Blank lines before or after certain statements.
    // Ref: https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      2,
      // Blank line before a `return` statement or a multi-line
      // block.
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'multiline-block-like']
      },
      // Blank line after a multi-line block.
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' }
    ],
    // These rules conflict with Prettier formatting and therefore need to be
    // disabled.
    // Ref: https://eslint.org/docs/rules/operator-linebreak
    // Ref: https://github.com/xjamundx/eslint-plugin-standard/blob/master/rules/computed-property-even-spacing.js
    'operator-linebreak': 0,
    'standard/computed-property-even-spacing': 0,
    // Blank line between class members.
    // Ref: https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': 2,
    // PropTypes validation does improve readability and understandability of
    // React components, but authoring and maintaining them everywhere is
    // unrealistic.
    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 0,
    // This rule prevents using `setState` in the `componentDidUpdate` lifecycle
    // method. This comes from a good place but sometimes is necessary.
    // Ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 0,
    // This rule enforces that `onClick` handlers come with key handlers as
    // well. There are cases where this is wanted.
    // Ref: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md.
    'jsx-a11y/click-events-have-key-events': 0,
    // By default, this rule expects all form controls to have an associated
    // label with a `htmlFor` props mapped to their `id` prop *and* that their
    // label wraps them entirely. This latter behaviour is undesired.
    // Ref: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': [2, { required: 'id' }],
    // This rule makes sure `aria-*` attributes are valid. Unfortunately it
    // reports a false-positive for `aria-describedby`.
    // Ref: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
    'jsx-a11y/aria-proptypes': 0,
    'fp/no-arguments': 'error',
    'fp/no-delete': 'error',
    'fp/no-get-set': 'error',
    'fp/no-let': 'error',
    'fp/no-loops': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-mutating-methods': 'error',
    'fp/no-mutation': [
      'error',
      {
        exceptions: [{ property: 'defaultProps' }, { property: 'propTypes' }]
      }
    ],
    'fp/no-proxy': 'error',
    'fp/no-rest-parameters': 'error',
    'fp/no-valueof-field': 'error',
    'no-var': 'error'
  }
}
