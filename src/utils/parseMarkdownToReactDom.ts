// import { parse as parseMarkDown } from 'marked';
import parse from 'html-react-parser';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import { markedEmoji, EmojiObject } from '../extensions/emoji';

// const octokit = new Octokit();
// Get all the emojis available to use on GitHub.
// octokit.rest.emojis.get().then(({data}) => {
//   const emojis = data as Record<string, string | EmojiObject>;

//   const options = {
//     emojis,
//     unicode: false,
//   };

//   marked.use(markedEmoji(options));
// })

const emojisJson = import.meta.glob('../assets/emoji.json', { as: 'raw', eager: true });

const emojis = JSON.parse(Object.values(emojisJson)[0]) as Record<string, string | EmojiObject>;

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
