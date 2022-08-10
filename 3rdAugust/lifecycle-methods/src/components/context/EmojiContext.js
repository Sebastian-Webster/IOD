import { createContext } from "react";

export const EmojiListContext = createContext(['😍', '😛', '💗', '😮', '🙃', '❌'])

export const CurrentEmojiContext = createContext({currentEmoji: {}, setCurrentEmoji: () => {}})