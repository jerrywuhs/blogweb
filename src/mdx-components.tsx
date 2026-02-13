import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  // 自定义表格样式
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto rounded-xl border border-slate-700 my-6 shadow-lg">
      <table className="w-full min-w-[500px]" {...props}>{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-indigo-500/20">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-white tracking-wider border-b border-slate-600">
      {children}
    </th>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-slate-700 bg-slate-900/50">
      {children}
    </tbody>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-sm text-slate-300 border-r border-slate-700">
      {children}
    </td>
  ),
  tr: ({ children }) => (
    <tr className="transition hover:bg-slate-800/50">
      {children}
    </tr>
  ),
  
  // 标题样式
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-white mt-8 mb-4 pb-2 border-b border-slate-700">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-white mt-8 mb-4 pb-2 border-b border-slate-700">
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
    <p className="my-4 text-slate-300 leading-relaxed">
      {children}
    </p>
  ),
  
  // 列表样式
  ul: ({ children }) => (
    <ul className="list-disc list-inside my-4 space-y-2 text-slate-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside my-4 space-y-2 text-slate-300">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-slate-300 leading-relaxed">
      {children}
    </li>
  ),
  
  // 引用样式
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-emerald-500 pl-4 my-4 italic text-slate-400 bg-emerald-500/5 py-2 rounded-r-lg">
      {children}
    </blockquote>
  ),
  
  // 代码样式
  code: ({ children, ...props }) => {
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
    <pre className="bg-slate-900 p-4 rounded-xl overflow-x-auto my-4 border border-slate-700 shadow-lg">
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
    <hr className="my-8 border-slate-700" />
  ),
  
  // 图片样式
  img: ({ src, alt }) => (
    <img 
      src={src} 
      alt={alt || ''} 
      className="rounded-xl my-6 shadow-lg border border-slate-700 max-w-full h-auto"
    />
  ),
};
