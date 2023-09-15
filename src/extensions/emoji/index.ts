import { MarkedExtension } from "marked";

/**
     * Objects for emoji option to allow unicode and url emoji.
     */
export type EmojiObject = {
    url: string;
    char?: never;
} | {
    url?: never;
    char: string;
}

/**
 * Options for configuring the marked-emojis extension
 */
interface MarkedEmojiOptions {
    /**
     * An object with keys as emoji name and values as emoji. The values are
     * assumed to be image urls (as returned by Octokit) unless `unicode` option
     * is `true`. Values can also be an object with a `url` property or `char` property
     * to allow unicode and url emoji at the same time.
     */
    emojis: Record<string, string | EmojiObject>;
    /**
     * Whether `emojis` values are image urls (`false`) or unicode characters (`true`)
     */
    unicode?: boolean;
}

const defaultOptions = {
  // emojis: {}, required
  unicode: false,
};

export function markedEmoji(options: MarkedEmojiOptions) :MarkedExtension{
  options = {
    ...defaultOptions,
    ...options,
  };

  if (!options.emojis) {
    throw new Error('Must provide emojis to markedEmoji');
  }

  const emojiNames = Object.keys(options.emojis)
    .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const emojiRegex = new RegExp(`:(${emojiNames}):`);
  const tokenizerRule = new RegExp(`^${emojiRegex.source}`);

  return {
    extensions: [
      {
        name: 'emoji',
        level: 'inline',
        start(src:string) {
          return src.match(emojiRegex)?.index;
        },
        tokenizer(src:string) {
          const match = tokenizerRule.exec(src);
          if (!match) {
            return;
          }

          const name = match[1];
          let emoji = options.emojis[name];
          let unicode = options.unicode;

          if (typeof emoji !== 'string') {
            if (typeof emoji.char === 'string') {
              emoji = emoji.char;
              unicode = true;
            } else if (typeof emoji.url === 'string') {
              emoji = emoji.url;
              unicode = false;
            } else {
              // invalid emoji
              return;
            }
          }

          return {
            type: 'emoji',
            raw: match[0],
            name,
            emoji,
            unicode,
          };
        },
        renderer(token) {
          if (token.unicode) {
            return token.emoji;
          } else {
            return `<g-emoji><img alt="${token.name}" src="${token.emoji}"></g-emoji>`;
          }
        },
      },
    ],
  };
}
