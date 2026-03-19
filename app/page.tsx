import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const mdPath = path.join(process.cwd(), "content", "jd.md");
  const content = fs.readFileSync(mdPath, "utf-8");

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <article className="prose prose-invert prose-lg max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white sm:text-5xl mb-2">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-white mt-12 mb-4 uppercase tracking-wide">
                {children}
              </h2>
            ),
            p: ({ children }) => (
              <p className="text-neutral-300 leading-loose mb-4">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="text-white font-semibold">{children}</strong>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-outside ml-5 mb-4 space-y-1 text-neutral-300">
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li className="leading-loose">{children}</li>
            ),
            hr: () => <hr className="border-neutral-700 my-8" />,
            em: ({ children }) => (
              <em className="text-neutral-400">{children}</em>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-white underline underline-offset-2 hover:text-neutral-300"
              >
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
