"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2457],{22457:(n,o,t)=>{t.r(o),t.d(o,{default:()=>r});const r={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# AndroidStudio Theme\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-androidstudio.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-androidstudio)\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/androidstudio\">\n  <img width=\"436\" alt=\"codemirror-theme-androidstudio\" src=\"https://user-images.githubusercontent.com/1680273/177484354-0a4fa43e-de96-409f-83e2-61808f2347e6.png\">\n</a>\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-theme-androidstudio --save\n```\n\n```js\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { androidstudio } from '@uiw/codemirror-theme-androidstudio';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [androidstudio, javascript({ jsx: true })],\n});\n```\n\nUsing in React:\n\n```jsx\nimport { tags as t } from '@lezer/highlight';\nimport { androidstudio, androidstudioInit } from '@uiw/codemirror-theme-androidstudio';\n\n<CodeMirror theme={androidstudio} />\n<CodeMirror\n  theme={androidstudioInit({\n    settings: {\n      caret: '#c6c6c6',\n      fontFamily: 'monospace',\n    },\n    styles: [\n      { tag: t.comment, color: '#6272a4' },\n    ]\n  })}\n/>\n```\n\n## API\n\n```tsx\nimport { CreateThemeOptions } from '@uiw/codemirror-themes';\nexport declare const defaultSettingsAndroidstudio: CreateThemeOptions['settings'];\nexport declare const androidstudioInit: (\n  options?: Partial<CreateThemeOptions>,\n) => import('@codemirror/state').Extension;\nexport declare const androidstudio: import('@codemirror/state').Extension;\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { androidstudio } from '@uiw/codemirror-theme-androidstudio';\nimport { javascript } from '@codemirror/lang-javascript';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      theme={androidstudio}\n      extensions={[javascript({ jsx: true })]}\n      onChange={(value, viewUpdate) => {\n        console.log('value:', value);\n      }}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { androidstudio } from '@uiw/codemirror-theme-androidstudio';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [androidstudio, javascript({ jsx: true })],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=2457.24bb898c.chunk.js.map