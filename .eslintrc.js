module.exports = {
    env: {
        browser: true,
        node: true
    },

    extends: [
        // vue - 코드 규칙
        // 'plugin:vue/vue3-essential', // lv1
        'plugin:vue/vue3-strongly-recommended', //lv2
        // 'plugin:vue/vue3-recommended', '//lv3

        // js
        'eslint:recommended'
    ],    
    parserOptions: {
        "parser": 'babel-eslint', // parser에 따옴표 추가
        // "requireConfigFile": false, // 추가
    },
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/html-self-closing": ["error", {
          "html": {
            "void": "always",
            "normal": "never",
            "component": "always"
          },
          "svg": "always",
            "math": "always"
          }]
    }
}