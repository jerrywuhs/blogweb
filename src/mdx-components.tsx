import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 自定义表格样式
    table: ({ children }) => (
      <div className="overflow-x-auto rounded-xl border border-[color:var(--border-muted)] my-6">
        <table className="w-full min-w-[600px]">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gradient-to-r from-[color:var(--brand-primary)]/20 to-[color:var(--brand-accent)]/20">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="px-6 py-4 text-left text-sm font-semibold text-white tracking-wider">
        {children}
      </th>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-[color:var(--border-muted)]">{children}</tbody>
    ),
    td: ({ children }) => (
      <td className="px-6 py-4 text-sm text-muted">{children}</td>
    ),
    tr: ({ children }) => (
      <tr className="transition hover:bg-[color:var(--surface-2)]">{children}</tr>
    ),
    
    // 增强其他元素
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-white mt-6 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="my-4 text-muted leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside my-4 space-y-2 text-muted">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside my-4 space-y-2 text-muted">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-muted">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[color:var(--brand-primary)] pl-4 my-4 italic text-muted">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-[color:var(--surface-2)] px-2 py-1 rounded text-sm font-mono text-[color:var(--brand-primary)]">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-[color:var(--surface-2)] p-4 rounded-xl overflow-x-auto my-4 border border-[color:var(--border-muted)]">
        {children}
      </pre>
    ),
    a: ({ children, href }) => (
      <a 
        href={href as string} 
        className="text-[color:var(--brand-primary)] hover:underline decoration-[color:var(--brand-primary)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    ...components,
  };
}
