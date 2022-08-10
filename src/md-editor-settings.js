
import mermaid from 'mermaid'
window.mermaid = mermaid.mermaidAPI;
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import createHljsTheme from '@kangc/v-md-editor/lib/theme/hljs';

import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';

import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';

import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';

import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';


import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align';


import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

// highlightjs
import hljs from 'highlight.js';

export function mdSettings(app) {

  const hljsTheme = createHljsTheme({
    Hljs: hljs,
  });
  hljsTheme.extend((md) => {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
  });
  
  VMdPreview.use(githubTheme, {
    Hljs: hljs,
  });
  VMdPreview.use(createMermaidPlugin());
  
  VMdPreview.use(createTipPlugin());
  
  VMdPreview.use(createEmojiPlugin());
  VMdPreview.use(createTodoListPlugin());
  // VMdPreview.use(createLineNumbertPlugin());
  VMdPreview.use(createAlignPlugin());
  VMdPreview.use(createCopyCodePlugin());
  app.use(VMdPreview);
}