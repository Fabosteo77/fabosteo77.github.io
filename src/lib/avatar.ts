// Deterministic initials + on-brand tint for review avatars (Google-style).

export function initials(name?: string | null): string {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

// A small on-brand palette (blues/cyans/teal), picked deterministically per name.
const TINTS = ['#0B54E0', '#0F62FF', '#1AA7C4', '#17789E', '#2BB7C9', '#3A6FE0'];

export function avatarColor(name?: string | null): string {
  const key = name ?? '';
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  return TINTS[hash % TINTS.length];
}
