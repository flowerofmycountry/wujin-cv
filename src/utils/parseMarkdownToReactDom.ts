// import { parse as parseMarkDown } from 'marked';
import parse from 'html-react-parser';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import { markedEmoji, EmojiObject } from '../extensions/emoji';
import emojisJsonString from '../assets/emoji.json?raw';

const emojis = JSON.parse(emojisJsonString) as Record<string, string | EmojiObject>;

const options = {
  emojis,
  unicode: false,
};

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  }),
);

marked.use(markedEmoji(options));

export default (markdown: string) => {
  return parse(marked.parse(markdown) as string);
};
