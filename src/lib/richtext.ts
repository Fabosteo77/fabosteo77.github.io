// Minimal renderer for Tina rich-text ASTs (legal pages) → HTML string.
type Node = {
  type?: string;
  text?: string;
  url?: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  children?: Node[];
};

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderChildren(node: Node): string {
  return (node.children ?? []).map(render).join('');
}

function render(node: Node): string {
  if (node.text !== undefined) {
    let out = esc(node.text);
    if (node.code) out = `<code>${out}</code>`;
    if (node.bold) out = `<strong>${out}</strong>`;
    if (node.italic) out = `<em>${out}</em>`;
    return out;
  }
  const inner = renderChildren(node);
  switch (node.type) {
    case 'root': return inner;
    case 'h1': return `<h1>${inner}</h1>`;
    case 'h2': return `<h2>${inner}</h2>`;
    case 'h3': return `<h3>${inner}</h3>`;
    case 'h4': return `<h4>${inner}</h4>`;
    case 'h5': return `<h5>${inner}</h5>`;
    case 'h6': return `<h6>${inner}</h6>`;
    case 'p': return `<p>${inner}</p>`;
    case 'blockquote': return `<blockquote>${inner}</blockquote>`;
    case 'ul': return `<ul>${inner}</ul>`;
    case 'ol': return `<ol>${inner}</ol>`;
    case 'li': return `<li>${inner}</li>`;
    case 'lic': return inner; // list item content wrapper
    case 'a': return `<a href="${esc(node.url ?? '#')}" rel="noopener">${inner}</a>`;
    case 'hr': return '<hr />';
    case 'break': return '<br />';
    default: return inner;
  }
}

export function richTextToHtml(ast: unknown): string {
  if (!ast || typeof ast !== 'object') return '';
  return render(ast as Node);
}
