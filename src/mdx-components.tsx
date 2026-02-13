import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 自定义表格样式 - 优化版
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto rounded-xl border border-[color:var(--border-muted)] my-6 shadow-lg">
        <table className="w-full min-w-[500px]" {...props}>{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-indigo-500/20">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-sm font-semibold text-white tracking-wider border-b border-[color:var(--border-muted)]">
        {children}
      </th>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-[color:var(--border-muted)] bg-[color:var(--surface-1)]">
        {children}
      </tbody>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-sm text-muted border-r border-[color:var(--border-muted)] last:border-r-0">
        {children}
      </td>
    ),
    tr: ({ children }) => (
      <tr className="transition hover:bg-[color:var(--surface-2)]">
        {children}
      </tr>
    ),
    
    // 增强标题样式
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-white mt-8 mb-4 pb-2 border-b border-[color:var(--border-muted)]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-white mt-8 mb-4 pb-2 border-b border-[color:var(--border-muted)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-white mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-white mt-4 mb-2">
        {children}
      </h4>
    ),
    
    // 段落样式
    p: ({ children }) => (
      <p className="my-4 text-muted leading-relaxed">
        {children}
      </p>
    ),
    
    // 列表样式
    ul: ({ children }) => (
      <ul className="list-disc list-inside my-4 space-y-2 text-muted">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside my-4 space-y-2 text-muted">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-muted leading-relaxed">
        {children}
      </li>
    ),
    
    // 引用样式
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-500 pl-4 my-4 italic text-muted bg-emerald-500/5 py-2 rounded-r-lg">
        {children}
      </blockquote>
    ),
    
    // 代码样式
    code: ({ children, ...props }) => {
      // 检测是否是行内代码（没有className且是简单内容）
      const isInline = !props.className && typeof children === 'string' && !children.includes('\n');
      if (isInline) {
        return (
          <code className="bg-slate-800 px-2 py-0.5 rounded text-sm font-mono text-emerald-400 border border-slate-700">
            {children}
          </code>
        );
      }
      return (
        <code className={props.className}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="bg-slate-900 p-4 rounded-xl overflow-x-auto my-4 border border-[color:var(--border-muted)] shadow-lg">
        {children}
      </pre>
    ),
    
    // 链接样式
    a: ({ children, href }) => (
      <a 
        href={href as string} 
        className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 decoration-emerald-500/30 hover:decoration-emerald-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    
    // 强调样式
    strong: ({ children }) => (
      <strong className="font-semibold text-white bg-slate-800 px-1.5 py-0.5 rounded">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="text-emerald-300 italic">
        {children}
      </em>
    ),
    
    // 分割线
    hr: () => (
      <hr className="my-8 border-[color:var(--border-muted)]" />
    ),
    
    // 图片样式
    img: ({ src, alt }) => (
      <img 
        src={src} 
        alt={alt || ''} 
        className="rounded-xl my-6 shadow-lg border border-[color:var(--border-muted)] max-w-full h-auto"
      />
    ),
    
    ...components,
  };
}
