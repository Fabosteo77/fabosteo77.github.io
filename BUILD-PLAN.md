# Plan de construction (Phase 2) — site fabosteo.fr

> Rédigé le 2026-07-17 pour validation par le propriétaire (gate 2). En français car c'est le
> document de décision du propriétaire. Statut : **PROPOSÉ — en attente d'approbation**.

## 1. Les pages du site

| Adresse | Page | Description |
|---|---|---|
| `/` | **Accueil (français)** | La page unique du site : toutes les sections, en français. |
| `/en/` | **Home (anglais)** | La même page, en anglais. Bouton de bascule FR/EN dans l'en-tête. |
| `/mentions-legales/` + `/en/legal/` | Mentions légales & confidentialité | Obligatoire (formulaire de contact + loi française). Lien discret dans le pied de page. |
| Page 404 | « Page introuvable » | S'affiche si un visiteur tape une mauvaise adresse. Bilingue, avec un bouton retour à l'accueil. |
| `/admin` | Panneau d'édition | Là où Fabien modifie textes et photos (TinaCMS). Non visible des visiteurs, non indexé. |
| `/styleguide` | Guide visuel | Page interne de contrôle du design (non listée, non indexée). |

## 2. Les sections de la page d'accueil (ordre approuvé — CONTENT-MAP.md)

Fond alterné bleu profond / clair, conformément au design approuvé.

1. **En-tête collant (bleu)** — logo blanc, liens *À propos · Pour qui · Expertise · Cabinets*,
   bouton **Contact**, bascule **Français/English**. Menu hamburger sous ~900 px.
2. **Héros (bleu)** — « Retrouvez votre mouvement… », badge « 10 Avis Google — 5 étoiles »,
   bouton **Prendre rendez-vous**, téléphone, **portrait** (`Images/Fabien-chat.png`).
3. **À propos (clair)** — 2 paragraphes + un avis Google mis en avant + lien « Voir tous les avis ».
4. **Pour qui ? (bleu)** — intro + 3 cartes (Adultes et seniors / Femmes enceintes / Nourrissons et
   enfants) avec icônes monochromes + note préventive.
5. **Expertise (clair)** — 4 cartes : Ostéopathie sportive, Nouveau-nés, Pédiatrie, Approche
   psychosomatique. Icônes en attendant les photos.
6. **Avis (clair, cartes blanches)** — 4 avis Google (étoiles jaunes, auteur, date) + « Voir plus d'avis ».
7. **Cabinets (bleu)** — 3 cartes : Talence, Mérignac, Bordeaux (adresse, horaires, note, bouton
   Prendre RDV) + moyens de paiement.
8. **Contact (clair)** — téléphone, réseaux sociaux, **formulaire** : prénom, nom, email, téléphone,
   sujet, message, choix du cabinet, préférence de recontact (email/téléphone).
9. **Pied de page (bleu)** — logo, navigation, contact, réseaux sociaux, lien mentions légales.

**Boutons « Prendre rendez-vous » :** tant que le lien Doctolib n'existe pas, ils font défiler vers
la section Contact (décision déjà actée). Dès que Fabien colle son lien Doctolib dans le panneau
d'édition, tous les boutons pointent vers Doctolib.

## 3. Ce que Fabien pourra modifier lui-même (panneau `/admin`)

Tout, sans coder. Deux grands blocs dans le panneau :

### « Réglages » (une seule fiche, partagée par les deux langues)
- Téléphone, email affiché, email destinataire du formulaire (**contact@fabosteo.fr**)
- Lien Doctolib (« Prendre rendez-vous »)
- Réseaux sociaux (Instagram, TikTok, Facebook, LinkedIn, YouTube — vides pour l'instant)
- Liens Google Maps des 3 cabinets (vides pour l'instant)

### « Page d'accueil — Français » et « Page d'accueil — English » (une fiche par langue)
Chaque section de la page est un formulaire :
- Héros : titre, sous-titre, texte du badge d'avis, photo
- À propos : les 2 paragraphes, l'avis mis en avant
- Pour qui : intro + les 3 cartes (**ajouter / modifier / supprimer / réordonner par glisser-déposer**)
- Expertise : les 4 cartes (idem, avec emplacement photo pour plus tard)
- Avis : la liste des avis (idem)
- Cabinets : les 3 cabinets — adresse, horaires, note (idem)
- Contact : titres et intitulés
- SEO : titre et description Google de la page, image de partage

Chaque enregistrement republie le site automatiquement (~2 minutes).

## 4. Design (verrouillé — rien à re-décider)

Le design approuvé le 2026-07-16 est appliqué tel quel : jetons dans `design/tokens.css` (copié vers
`styles/tokens.css`), composants selon `DESIGN-SPEC.md`, référence visuelle `design/styleguide.html`.
Police Figtree auto-hébergée. Contrôle : la page `/styleguide` du site devra être identique à la
référence approuvée (gate 3 avant la construction des sections).

## 5. Textes proposés (à valider avec ce plan)

- **Formulaire envoyé (succès)** — FR : « Merci ! Votre message a bien été envoyé. Je vous répondrai
  au plus vite. » / EN : "Thank you! Your message has been sent. I'll get back to you shortly."
- **Formulaire en erreur** — FR : « Désolé, l'envoi a échoué. Réessayez dans un instant ou
  appelez-moi directement au 06 98 69 48 59. » / EN : "Sorry, something went wrong. Please try again
  or call me directly at 06 98 69 48 59."
- **Page 404** — FR : « Page introuvable — Cette page n'existe pas ou a été déplacée. » + bouton
  « Retour à l'accueil » / EN équivalent.
- **Bannière cookies** — minimale (pas de statistiques pour l'instant) : le site ne dépose aucun
  cookie non essentiel ; la bannière informe et propose Accepter/Refuser pour d'éventuels services
  futurs.
- **Référencement Google (JSON-LD)** : fiche entreprise de type santé (`MedicalBusiness` +
  ostéopathe), avec les 3 cabinets, alimentée par les Réglages.

## 6. Aspects techniques décidés

- Dépôt GitHub public **`fabosteo77.github.io`** → le site de validation vit à la racine de
  `https://fabosteo77.github.io/` (pas de sous-dossier, bascule domaine propre en Phase 6).
- `/` = français (langue principale), `/en/` = anglais, balises `hreflang` entre les deux.
- Formulaire via Formsubmit vers **contact@fabosteo.fr** (email de confirmation à cliquer une fois,
  à la première utilisation en ligne — Phase 5).
- Pas de statistiques pour l'instant (décision 2026-07-17).
- Le domaine **fabosteo.fr** bascule sur le nouveau site en Phase 6, une fois le site validé sur
  l'adresse GitHub. Registrar à identifier à ce moment-là.
- Sitemap, robots.txt, SEO par page, accessibilité WCAG 2.1 AA, images optimisées : inclus d'office.

## 7. Déroulé après approbation

1. **Phase 3** — fondations techniques (Astro + Tina). Fabien intervient une fois : création du
   compte **Tina Cloud** (app.tina.io, gratuit) et connexion au dépôt GitHub — guidé pas à pas.
2. **Phase 4** — construction : d'abord `/styleguide` (validation), puis les sections une à une,
   revue ensemble en local.
3. **Phase 5** — mise en ligne sur fabosteo77.github.io + tests ensemble (édition dans `/admin`,
   formulaire, mobile).
4. **Phase 6** — bascule du domaine fabosteo.fr.
