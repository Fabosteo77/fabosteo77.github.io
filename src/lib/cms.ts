// Content access through the generated Tina client (per instructions.md §Phase 4.3).
// `tina/__generated__/` is produced by `npm run tina:dev` / `npm run tina:build`.
import { client } from '../../tina/__generated__/client';

export async function getPage(relativePath: 'fr.json' | 'en.json') {
  const res = await client.queries.page({ relativePath });
  return res.data.page;
}

export async function getSettings() {
  const res = await client.queries.settings({ relativePath: 'index.json' });
  return res.data.settings;
}

export async function getLegal(relativePath: 'fr.md' | 'en.md') {
  const res = await client.queries.legal({ relativePath });
  return res.data.legal;
}

/** "Book" buttons: Doctolib when the owner has filled it in, contact section otherwise. */
export function bookHref(settings: { bookingUrl?: string | null }) {
  return settings.bookingUrl?.trim() ? settings.bookingUrl : '#contact';
}
