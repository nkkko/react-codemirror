"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[702],{30702:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n={components:{},data:{},source:"\x3c!--rehype:ignore:start--\x3e\n\n# Duotone Theme\n\n\x3c!--rehype:ignore:end--\x3e\n\n[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)\n[![npm version](https://img.shields.io/npm/v/@uiw/codemirror-theme-duotone.svg)](https://www.npmjs.com/package/@uiw/codemirror-theme-duotone)\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/duotone/dark\">\n  <img width=\"436\" alt=\"codemirror-theme-duotone\" src=\"https://user-images.githubusercontent.com/1680273/176572959-adfc1284-4c70-48df-8aeb-9a47ff76b2f2.png\">\n</a>\n\n<a href=\"https://uiwjs.github.io/react-codemirror/#/theme/data/duotone/light\">\n  <img width=\"436\" alt=\"codemirror-theme-duotone\" src=\"https://user-images.githubusercontent.com/1680273/176573139-5c22ed62-6000-40da-b080-59c83e6181e2.png\">\n</a>\n\n## Install\n\n```bash\nnpm install @uiw/codemirror-theme-duotone --save\n```\n\n```js\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [duotoneDark, javascript({ jsx: true })],\n});\n```\n\nUsing in React:\n\n```jsx\nimport { duotoneLight, duotoneLightInit, duotoneDark, duotoneDarkInit } from '@uiw/codemirror-theme-duotone';\n\n<CodeMirror theme={duotoneLight} />\n<CodeMirror\n  theme={duotoneLightInit({\n    settings: {\n      caret: '#c6c6c6',\n      fontFamily: 'monospace',\n    }\n  })}\n/>\n```\n\n## API\n\n```tsx\nimport { CreateThemeOptions } from '@uiw/codemirror-themes';\nexport declare const defaultSettingsDuotoneLight: CreateThemeOptions['settings'];\nexport declare const duotoneLightInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const duotoneLight: import('@codemirror/state').Extension;\nexport declare const defaultSettingsDuotoneDark: CreateThemeOptions['settings'];\nexport declare const duotoneDarkInit: (options?: Partial<CreateThemeOptions>) => import('@codemirror/state').Extension;\nexport declare const duotoneDark: import('@codemirror/state').Extension;\n```\n\n## Usage\n\n```jsx\nimport CodeMirror from '@uiw/react-codemirror';\nimport { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';\nimport { javascript } from '@codemirror/lang-javascript';\n\nfunction App() {\n  return (\n    <CodeMirror\n      value=\"console.log('hello world!');\"\n      height=\"200px\"\n      theme={duotoneLight}\n      extensions={[javascript({ jsx: true })]}\n      onChange={(value, viewUpdate) => {\n        console.log('value:', value);\n      }}\n    />\n  );\n}\nexport default App;\n```\n\n```js\nimport { EditorView } from '@codemirror/view';\nimport { EditorState } from '@codemirror/state';\nimport { javascript } from '@codemirror/lang-javascript';\nimport { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';\n\nconst state = EditorState.create({\n  doc: 'my source code',\n  extensions: [duotoneDark, javascript({ jsx: true })],\n});\n\nconst view = new EditorView({\n  parent: document.querySelector('#editor'),\n  state,\n});\n```\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://github.com/uiwjs/react-codemirror/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-codemirror/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n\nby Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=702.32d41073.chunk.js.map