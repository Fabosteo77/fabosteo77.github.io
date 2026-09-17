import { defineConfig } from 'tinacms';

// Champs SEO partagés par toutes les pages
const seoField = {
  type: 'object' as const,
  name: 'seo',
  label: 'SEO (référencement Google)',
  fields: [
    { type: 'string' as const, name: 'metaTitle', label: 'Titre Google', required: true },
    {
      type: 'string' as const,
      name: 'metaDescription',
      label: 'Description Google',
      required: true,
      ui: { component: 'textarea' as const },
    },
    { type: 'image' as const, name: 'ogImage', label: 'Image de partage (réseaux sociaux)' },
  ],
};

const iconOptions = [
  { value: 'activity', label: 'Silhouette dynamique (activité)' },
  { value: 'heart', label: 'Cœur' },
  { value: 'baby', label: 'Bébé' },
  { value: 'smile', label: 'Sourire (enfant)' },
  { value: 'zap', label: 'Éclair (sport / énergie)' },
  { value: 'brain', label: 'Esprit (approche psychosomatique)' },
  { value: 'bone', label: 'Articulation' },
  { value: 'hand', label: 'Main' },
  { value: 'shield', label: 'Bouclier (prévention)' },
  { value: 'sun', label: 'Soleil (bien-être)' },
];

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.HEAD || 'main',
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: 'images', publicFolder: 'src/assets' } },
  schema: {
    collections: [
      // ------------------------------------------------------------------
      // Réglages — coordonnées et liens, partagés par les deux langues
      // ------------------------------------------------------------------
      {
        name: 'settings',
        label: 'Réglages (téléphone, emails, liens)',
        path: 'content/settings',
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'phone', label: 'Téléphone', required: true },
          { type: 'string', name: 'displayEmail', label: 'Email affiché sur le site', required: true },
          {
            type: 'string',
            name: 'formRecipient',
            label: 'Email qui reçoit les messages du formulaire',
            required: true,
          },
          {
            type: 'string',
            name: 'bookingUrl',
            label: 'Lien Doctolib « Prendre rendez-vous » (laisser vide : les boutons mènent au formulaire)',
          },
          { type: 'string', name: 'googleReviewsUrl', label: 'Lien vers vos avis Google' },
          {
            type: 'object',
            name: 'socials',
            label: 'Réseaux sociaux (laisser vide pour masquer)',
            fields: [
              { type: 'string', name: 'instagram', label: 'Instagram' },
              { type: 'string', name: 'tiktok', label: 'TikTok' },
              { type: 'string', name: 'facebook', label: 'Facebook' },
              { type: 'string', name: 'linkedin', label: 'LinkedIn' },
              { type: 'string', name: 'youtube', label: 'YouTube' },
            ],
          },
          {
            type: 'object',
            name: 'clinicLinks',
            label: 'Liens Google Maps des cabinets',
            list: true,
            ui: { itemProps: (item: Record<string, unknown>) => ({ label: item?.name }) },
            fields: [
              { type: 'string', name: 'name', label: 'Cabinet' },
              { type: 'string', name: 'mapsUrl', label: 'Lien Google Maps' },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Page d'accueil — un document par langue (fr.json / en.json)
      // ------------------------------------------------------------------
      {
        name: 'page',
        label: "Page d'accueil (FR + EN)",
        path: 'content/pages',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
          itemProps: (item: Record<string, unknown>) => ({
            label: item?.locale === 'en' ? "Page d'accueil — English" : "Page d'accueil — Français",
          }),
        },
        fields: [
          { type: 'string', name: 'locale', label: 'Langue (ne pas modifier)', required: true },
          seoField,
          {
            type: 'object',
            name: 'header',
            label: 'En-tête (menu)',
            fields: [
              {
                type: 'object',
                name: 'links',
                label: 'Liens du menu',
                list: true,
                ui: { itemProps: (item: Record<string, unknown>) => ({ label: item?.label }) },
                fields: [
                  { type: 'string', name: 'label', label: 'Texte' },
                  { type: 'string', name: 'href', label: 'Cible (ancre)' },
                ],
              },
              { type: 'string', name: 'contactLabel', label: 'Bouton Contact' },
              { type: 'string', name: 'switcherLabel', label: 'Bouton de langue (texte)' },
              { type: 'string', name: 'switcherHref', label: 'Bouton de langue (cible)' },
            ],
          },
          {
            type: 'object',
            name: 'hero',
            label: 'Héros (haut de page)',
            fields: [
              { type: 'string', name: 'badge', label: "Badge d'avis (ex. 10 Avis Google — 5 étoiles)" },
              { type: 'string', name: 'heading', label: 'Grand titre', required: true },
              { type: 'string', name: 'subheading', label: 'Sous-titre', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaLabel', label: 'Bouton principal (Prendre rendez-vous)' },
              { type: 'image', name: 'photo', label: 'Photo (portrait)' },
              { type: 'string', name: 'photoAlt', label: 'Description de la photo (accessibilité)' },
              {
                type: 'object',
                name: 'stats',
                label: 'Chiffres clés (sous les boutons)',
                list: true,
                ui: { itemProps: (item: Record<string, unknown>) => ({ label: `${item?.value ?? ''} ${item?.label ?? ''}` }) },
                fields: [
                  { type: 'string', name: 'value', label: 'Chiffre (ex. 20 ans)' },
                  { type: 'string', name: 'label', label: 'Libellé (ex. d’expérience)' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'about',
            label: 'À propos',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
              {
                type: 'string',
                name: 'paragraphs',
                label: 'Paragraphes',
                list: true,
                ui: { component: 'textarea' },
              },
              { type: 'string', name: 'quoteText', label: 'Avis mis en avant (texte)', ui: { component: 'textarea' } },
              { type: 'string', name: 'quoteAuthor', label: 'Avis mis en avant (auteur)' },
              { type: 'string', name: 'reviewsCtaLabel', label: 'Bouton « Voir tous les avis »' },
            ],
          },
          {
            type: 'object',
            name: 'forWhom',
            label: 'Pour qui ?',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
              { type: 'string', name: 'subheading', label: 'Sous-titre', ui: { component: 'textarea' } },
              { type: 'string', name: 'intro', label: 'Introduction', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'cards',
                label: 'Cartes (publics)',
                list: true,
                ui: { itemProps: (item: Record<string, unknown>) => ({ label: item?.title }) },
                fields: [
                  { type: 'string', name: 'icon', label: 'Icône', options: iconOptions },
                  { type: 'string', name: 'title', label: 'Titre' },
                  { type: 'string', name: 'items', label: 'Liste', list: true },
                ],
              },
              { type: 'string', name: 'footnote', label: 'Note (en dessous des cartes)' },
              { type: 'string', name: 'bookCtaLabel', label: 'Bouton « Prendre rendez-vous »' },
              { type: 'string', name: 'clinicsCtaLabel', label: 'Bouton « Voir les cabinets »' },
            ],
          },
          {
            type: 'object',
            name: 'expertise',
            label: "Domaines d'expertise",
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
              {
                type: 'object',
                name: 'cards',
                label: 'Cartes',
                list: true,
                ui: { itemProps: (item: Record<string, unknown>) => ({ label: item?.title }) },
                fields: [
                  { type: 'string', name: 'icon', label: 'Icône', options: iconOptions },
                  { type: 'string', name: 'title', label: 'Titre' },
                  { type: 'string', name: 'body', label: 'Texte', ui: { component: 'textarea' } },
                  { type: 'image', name: 'image', label: 'Photo (optionnelle, remplace l’icône)' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'reviews',
            label: 'Avis de mes patients',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
              {
                type: 'object',
                name: 'items',
                label: 'Avis',
                list: true,
                ui: { itemProps: (item: Record<string, unknown>) => ({ label: item?.author }) },
                fields: [
                  { type: 'string', name: 'author', label: 'Auteur' },
                  { type: 'string', name: 'date', label: 'Date (ex. il y a 8 mois)' },
                  { type: 'number', name: 'rating', label: 'Étoiles (1 à 5)' },
                  { type: 'string', name: 'text', label: 'Texte', ui: { component: 'textarea' } },
                ],
              },
              { type: 'string', name: 'moreCtaLabel', label: 'Bouton « Voir plus d’avis »' },
            ],
          },
          {
            type: 'object',
            name: 'clinics',
            label: 'Mes cabinets',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
              { type: 'string', name: 'subheading', label: 'Sous-titre', ui: { component: 'textarea' } },
              { type: 'string', name: 'bookCtaLabel', label: 'Bouton « Prendre RDV »' },
              {
                type: 'object',
                name: 'items',
                label: 'Cabinets',
                list: true,
                ui: { itemProps: (item: Record<string, unknown>) => ({ label: item?.name }) },
                fields: [
                  { type: 'string', name: 'name', label: 'Ville' },
                  { type: 'string', name: 'address', label: 'Adresse' },
                  { type: 'string', name: 'hours', label: 'Horaires' },
                  { type: 'string', name: 'note', label: 'Note (ex. parking gratuit)' },
                  { type: 'image', name: 'image', label: 'Photo du cabinet (optionnelle)' },
                  { type: 'string', name: 'badge', label: 'Pastille (ex. Cabinet principal) — laisser vide pour aucune' },
                ],
              },
              { type: 'string', name: 'payment', label: 'Paiement / remboursement', list: true },
            ],
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Contact + formulaire',
            fields: [
              { type: 'string', name: 'heading', label: 'Titre' },
              { type: 'string', name: 'subheading', label: 'Sous-titre' },
              { type: 'string', name: 'byPhoneLabel', label: 'Libellé « Par téléphone »' },
              { type: 'string', name: 'socialLabel', label: 'Libellé « Réseaux sociaux »' },
              {
                type: 'object',
                name: 'form',
                label: 'Formulaire',
                fields: [
                  { type: 'string', name: 'heading', label: 'Titre du formulaire' },
                  { type: 'string', name: 'intro', label: 'Phrase d’introduction' },
                  { type: 'string', name: 'firstNameLabel', label: 'Champ Prénom' },
                  { type: 'string', name: 'lastNameLabel', label: 'Champ Nom' },
                  { type: 'string', name: 'emailLabel', label: 'Champ Email' },
                  { type: 'string', name: 'phoneLabel', label: 'Champ Téléphone' },
                  { type: 'string', name: 'subjectLabel', label: 'Champ Sujet' },
                  { type: 'string', name: 'messageLabel', label: 'Champ Message' },
                  { type: 'string', name: 'clinicQuestion', label: 'Question cabinet' },
                  { type: 'string', name: 'prefQuestion', label: 'Question recontact' },
                  { type: 'string', name: 'prefEmail', label: 'Option Email' },
                  { type: 'string', name: 'prefPhone', label: 'Option Téléphone' },
                  { type: 'string', name: 'submitLabel', label: 'Bouton Envoyer' },
                  { type: 'string', name: 'successMessage', label: 'Message de succès', ui: { component: 'textarea' } },
                  { type: 'string', name: 'errorMessage', label: 'Message d’erreur', ui: { component: 'textarea' } },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'cookie',
            label: 'Bannière cookies',
            fields: [
              { type: 'string', name: 'message', label: 'Message', ui: { component: 'textarea' } },
              { type: 'string', name: 'acceptLabel', label: 'Bouton Accepter' },
              { type: 'string', name: 'declineLabel', label: 'Bouton Refuser' },
            ],
          },
          {
            type: 'object',
            name: 'footer',
            label: 'Pied de page',
            fields: [
              { type: 'string', name: 'navLabel', label: 'Titre colonne Navigation' },
              { type: 'string', name: 'socialLabel', label: 'Titre colonne Réseaux sociaux' },
              { type: 'string', name: 'contactLabel', label: 'Titre colonne Contact' },
              { type: 'string', name: 'legalLinkText', label: 'Lien mentions légales' },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Mentions légales — un document par langue (fr.md / en.md)
      // ------------------------------------------------------------------
      {
        name: 'legal',
        label: 'Mentions légales & confidentialité',
        path: 'content/legal',
        format: 'md',
        ui: {
          allowedActions: { create: false, delete: false },
          itemProps: (item: Record<string, unknown>) => ({
            label: item?.locale === 'en' ? 'Legal — English' : 'Mentions légales — Français',
          }),
        },
        fields: [
          { type: 'string', name: 'locale', label: 'Langue (ne pas modifier)', required: true },
          { type: 'string', name: 'title', label: 'Titre', required: true },
          seoField,
          { type: 'rich-text', name: 'body', label: 'Texte', isBody: true },
        ],
      },
    ],
  },
});
