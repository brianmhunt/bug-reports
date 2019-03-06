module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "targets": { "browsers": "chrome 60" },
      "exclude": [
        "transform-async-to-generator"
      ]
    }],
    ["@babel/typescript", {
      "isTSX": true,
      "allExtensions": true,
      "jsxPragma": "woobwoob"
    } ],
  ],
  "plugins": [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    ["@babel/plugin-transform-react-jsx", {
      "useBuiltIns": true,
      "pragma": "tE",
      "pragmaFrag": "tF",
      "throwIfNamespace": false
    }]
  ],
  "env": {
    "test": {
      "plugins": ["transform-es2015-modules-commonjs"]
    }
  }
}
