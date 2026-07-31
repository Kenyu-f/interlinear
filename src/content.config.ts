import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const tutorials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tutorials" }),
  schema: z.object({
    // 表示タイトル (例: "Python")
    title: z.string(),
    // プログラミング言語のスラッグ (例: "python") - ディレクトリ名と一致させる
    lang: z.string(),
    // 自然言語ロケール (例: "ja", "en")
    locale: z.enum(["ja", "en"]),
    // ロケールでの表示名 (例: "日本語", "English")
    localeLabel: z.string(),
    // コード内で使うファイル名 (例: "learnpython.py")
    filename: z.string(),
    // シンタックスハイライト用言語
    codeLang: z.string(),
  }),
});

export const collections = { tutorials };
