# Content source file — fabosteo.fr

> Transcribed directly from the live site (French + English versions).
> Split into a 🇫🇷 block and a 🇬🇧 block — copy each into its own locale file
> (e.g. `index.fr.md` / `index.en.md`) for an Astro + TinaCMS i18n setup, or feed
> the whole file to your `instructions.md` workflow to map onto your block schema.
>
> Notes:
> - Patient reviews are truncated on the live site (they end in "…"); the visible
>   text is captured verbatim below — pull the full text from Google if you want it complete.
> - `booking` / Doctolib URLs and map links aren't visible in the screenshots — TODO.

# ══════════════════════════════════════════════
# 🇫🇷  FRANÇAIS  →  index.fr.md
# ══════════════════════════════════════════════

---
locale: fr
title: "Fabien Marié — Ostéopathe D.O"

# ---- Shared / header fields (keep in sync across locales) ----
brand:
  name: "Fabien Marié"
  credential: "Ostéopathe D.O"
phone: "06 98 69 48 59"
email: "contact@fabienmarieosteo.fr"
socials:
  instagram: ""   # TODO: URLs
  tiktok: ""
  facebook: ""
  linkedin: ""
  youtube: ""
bookingUrl: ""    # TODO: lien Doctolib "Prendre rendez-vous"

nav:
  - { label: "Fabien",    href: "#fabien" }
  - { label: "Pour qui ?", href: "#pour-qui" }
  - { label: "Expertise", href: "#expertise" }
  - { label: "Avis",      href: "#avis" }
  - { label: "Cabinets",  href: "#cabinets" }
---

## Hero
heading: "Retrouvez votre mouvement, découvrez votre dynamisme"
subheading: "Une approche douce et personnalisée, adaptée pour tous les âges."
ratingBadge: "10 Avis Google — 5 étoiles"
cta: "Prendre rendez-vous"
phone: "06 98 69 48 59"

## À propos  (#fabien)
heading: "À propos de Fabien Marié"

Fort de près de 20 ans de pratique, je maîtrise l'ensemble des techniques ostéopathique.
J'intègre également des approches thérapeutiques complémentaires pour vous offrir une
prise en charge unique et adaptée à vos besoins.

Je traite votre corps dans sa globalité pour une guérison durable. Ayant vécu en
Angleterre et aux États-Unis, je peux vous proposer des consultations en anglais.

## Pour qui ?  (#pour-qui)
heading: "Pour qui ?"
subheading: "Je vous accompagne de 0 à 99 ans, de la tête aux pieds, pour soulager, prévenir et optimiser votre santé au quotidien."
intro: "Spécialisé dans les troubles fonctionnels, je traite bien sûr les douleurs au dos et les douleurs irradiantes comme la sciatique, mais aussi une large gamme de troubles pour tous les âges :"

cards:
  - title: "Adultes et seniors"
    items:
      - "Douleurs articulaires et musculaires"
      - "Névralgies"
      - "Troubles ORL récidivants"
      - "Troubles digestifs"
      - "Troubles féminins"
      - "Troubles du sommeil"
  - title: "Femmes enceintes"
    items:
      - "Préparation à l'accouchement"
      - "Douleurs de grossesse"
  - title: "Nourrissons et enfants"
    items:
      - "Troubles digestifs"
      - "Troubles du développement"
      - "Pleurs inexpliqués"
      - "Suivi post-natal"

footnote: "💡 L'ostéopathie est une médecine préventive : plus on agit tôt, mieux c'est !"

## Mes domaines d'expertise  (#expertise)
heading: "Mes domaines d'expertise"

cards:
  - title: "Ostéopathie sportive"
    body: "Prévention et traitement des blessures sportives pour optimiser la performance et le confort lors de l'activité."
    image: ""   # TODO: image coureur
  - title: "Nouveau-nés"
    body: "Traitement des troubles fonctionnels du nourrisson (coliques, torticolis, plagiocéphalie, etc.) pour restaurer leur mobilité et leur confort."
  - title: "Pédiatrie"
    body: "Prise en charge des troubles fonctionnels de l'enfant (posturaux, digestifs, séquelles de chutes, troubles du sommeil, etc.) pour une croissance harmonieuse et confortable."
  - title: "Approche psychosomatique"
    body: "Une approche personnelle d'ostéopathie que je pourrai associer avec des techniques de sophrologie, d'hypnose ou de relaxation selon vos besoins."

## Avis de mes patients  (#avis)
heading: "Avis de mes patients"
cta: "Voir plus d'avis"

# Note : textes tronqués sur le site (se terminent par "…")
reviews:
  - author: "Pascaline Steinbach"
    date: "il y a 8 mois"
    rating: 5
    text: "J'ai consulté Fabien Marié suite à une douleur intense à l'épaule. Dès la première séance, j'ai apprécié son écoute, sa disponibilité et sa douceur dans …"
  - author: "Adrien Simon"
    date: "il y a 10 mois"
    rating: 5
    text: "Un ostéopathe passionné, à l'écoute et d'un grand professionnalisme. Il prend le temps d'expliquer chaque geste avec clarté, ce qui est très rassurant. Dès …"
  - author: "Maelys Boirie"
    date: "il y a 8 mois"
    rating: 5
    text: "Un professionnel d'une grande gentillesse, très humain et à l'écoute. On se sent immédiatement à l'aise entre ses mains expertes. Efficace, il a su soulager …"
  - author: "Sophie Hartpence"
    date: "il y a 8 mois"
    rating: 5
    text: "Très bon ostéopathe. Grande écoute et beaucoup de professionnalisme !"

## Mes cabinets  (#cabinets)
heading: "Mes cabinets"
subheading: "Je vous accueille au sein de 3 cabinets en Gironde. Je me suis entouré de collaborateurs dans chaque cabinet pour vous recevoir dans la journée si nécessaire."

clinics:
  - name: "Talence"
    address: "Château Labro, 13 Impasse Peybouquey, 33400 Talence"
    hours: "08h00 - 20h00"
    note: "Parking gratuit à disposition"
    mapsUrl: ""   # TODO
    cta: "Prendre RDV"
  - name: "Mérignac"
    address: "Medical Stadium, 8 Rue Georges Négrevergne, 33700 Mérignac"
    hours: "08h00 - 20h00"
    note: ""
    mapsUrl: ""   # TODO
    cta: "Prendre RDV"
  - name: "Bordeaux"
    address: "52 Rue Huguerie, 33000 Bordeaux"
    hours: "08h00 - 20h00"
    note: ""
    mapsUrl: ""   # TODO
    cta: "Prendre RDV"

payment:
  - "💳 Chèques, espèces et carte bancaire"
  - "Non remboursé par l'Assurance Maladie"
  - "Remboursement possible selon votre mutuelle"

## Me contacter
heading: "Me contacter"
subheading: "Une question ? N'hésitez pas à me contacter directement."
byPhoneLabel: "Par téléphone"
phone: "06 98 69 48 59"
socialLabel: "Réseaux sociaux"

form:
  heading: "Me contacter"
  intro: "Laissez vos coordonnées et un court message ci-dessous."
  fields:
    - { name: "prenom",   label: "Prénom",              type: "text" }
    - { name: "nom",      label: "Nom",                 type: "text" }
    - { name: "email",    label: "Adresse email",       type: "email" }
    - { name: "tel",      label: "Numéro de téléphone", type: "tel" }
    - { name: "sujet",    label: "Sujet de votre demande", type: "text" }
    - { name: "message",  label: "Votre message",       type: "textarea" }
  clinicQuestion: "Quel cabinet souhaitez-vous consulter ? *"
  clinicOptions: ["Talence", "Mérignac", "Bordeaux"]
  contactPreferenceQuestion: "Comment vous recontacter ? *"
  contactPreferenceOptions: ["Email", "Téléphone"]
  submit: "Envoyer"

## Footer
socialLabel: "Réseaux sociaux"   # instagram, tiktok, facebook, linkedin, youtube
navLabel: "Navigation"
nav: ["Fabien", "Expertise", "Services", "Avis", "Cabinets"]
contactLabel: "Contact"
phone: "06 98 69 48 59"
email: "contact@fabienmarieosteo.fr"


# ══════════════════════════════════════════════
# 🇬🇧  ENGLISH  →  index.en.md
# ══════════════════════════════════════════════

---
locale: en
title: "Fabien Marié — Osteopath D.O"

brand:
  name: "Fabien Marié"
  credential: "Osteopath D.O"
phone: "06 98 69 48 59"
email: "contact@fabienmarieosteo.fr"
socials:
  instagram: ""   # TODO
  tiktok: ""
  facebook: ""
  linkedin: ""
  youtube: ""
bookingUrl: ""    # TODO

nav:
  - { label: "Fabien",     href: "#fabien" }
  - { label: "For Whom?",  href: "#for-whom" }
  - { label: "Expertise",  href: "#expertise" }
  - { label: "Reviews",    href: "#reviews" }
  - { label: "Clinics",    href: "#clinics" }
---

## Hero
heading: "Rediscover Your Movement, Discover Your Dynamism"
subheading: "A gentle and personalized approach, suited for all ages."
ratingBadge: "10 Google Reviews — 5 stars"
cta: "Book an Appointment"
phone: "06 98 69 48 59"

## About  (#fabien)
heading: "About Fabien Marié"

With nearly 20 years of practice, I master all osteopathic techniques. I also integrate
complementary therapeutic approaches to offer you unique and personalized care tailored
to your needs.

I treat your body as a whole for lasting healing. Having lived in England and the United
States, I can offer you consultations in English.

## For Whom?  (#for-whom)
heading: "For Whom?"
subheading: "I support you from 0 to 99 years old, from head to toe, to relieve, prevent and optimize your daily health."
intro: "Specialized in functional disorders, I treat of course back pain and radiating pain like sciatica, but also a wide range of disorders for all ages:"

cards:
  - title: "Adults & Seniors"
    items:
      - "Joint and muscle pain"
      - "Neuralgia"
      - "Recurring ENT disorders"
      - "Digestive disorders"
      - "Female disorders"
      - "Sleep disorders"
  - title: "Pregnant Women"
    items:
      - "Childbirth preparation"
      - "Pregnancy related pain"
  - title: "Infants & Children"
    items:
      - "Digestive disorders"
      - "Developmental disorders"
      - "Unexplained crying"
      - "Postnatal follow-up"

footnote: "💡 Osteopathy is preventive medicine: the earlier we act, the better!"

## My Areas of Expertise  (#expertise)
heading: "My Areas of Expertise"

cards:
  - title: "Sports Osteopathy"
    body: "Prevention and treatment of sports injuries to optimize performance and comfort during activity."
    image: ""   # TODO
  - title: "Newborns"
    body: "Treatment of functional disorders in infants (colic, torticollis, plagiocephaly, etc.) to restore their mobility and comfort."
  - title: "Pediatrics"
    body: "Management of functional disorders in children (postural, digestive, sequelae of falls, sleep disorders, etc.) for harmonious and comfortable growth."
  - title: "Psychosomatic Approach"
    body: "A personalized approach to osteopathy that I can combine with sophrology, hypnosis or relaxation techniques according to your needs."

## Patient Reviews  (#reviews)
heading: "Patient Reviews"
cta: "View More Reviews"

# Note: truncated on the live site (end in "…")
reviews:
  - author: "Pascaline Steinbach"
    date: "8 months ago"
    rating: 5
    text: "I consulted Fabien Marié for intense shoulder pain. From the first session, I appreciated his listening, availability and gentle approach. He was able to …"
  - author: "Adrien Simon"
    date: "10 months ago"
    rating: 5
    text: "A passionate osteopath, attentive and highly professional. He takes time to explain each gesture with clarity, which is very reassuring. From the welcome, you …"
  - author: "Maelys Boirie"
    date: "10 months ago"
    rating: 5
    text: "A professional of great kindness, very human and attentive. You immediately feel at ease in his expert hands. Effective, he was able to relieve my pain from …"
  - author: "Sophie Hartpence"
    date: "8 months ago"
    rating: 5
    text: "Very good osteopath. Great listening and lots of professionalism!"

## My Clinics  (#clinics)
heading: "My Clinics"
subheading: "I welcome you in 3 clinics in Gironde. I have surrounded myself with collaborators in each clinic to receive you the same day if necessary."

clinics:
  - name: "Talence"
    address: "Château Labro, 13 Impasse Peybouquey, 33400 Talence"
    hours: "08h00 - 20h00"
    note: "Free parking available"
    mapsUrl: ""   # TODO
    cta: "Book Appointment"
  - name: "Mérignac"
    address: "Medical Stadium, 8 Rue Georges Négrevergne, 33700 Mérignac"
    hours: "08h00 - 20h00"
    note: ""
    mapsUrl: ""   # TODO
    cta: "Book Appointment"
  - name: "Bordeaux"
    address: "52 Rue Huguerie, 33000 Bordeaux"
    hours: "08h00 - 20h00"
    note: ""
    mapsUrl: ""   # TODO
    cta: "Book Appointment"

payment:
  - "💳 Checks, cash and credit card"
  - "Not reimbursed by Health insurance"
  - "Reimbursement possible depending on your health insurance"

## Contact Me
heading: "Contact Me"
subheading: "Have a question? Feel free to contact me directly."
byPhoneLabel: "By Phone"
phone: "06 98 69 48 59"
socialLabel: "Social Media"

form:
  heading: "Get in Touch"
  intro: "Leave your details and a short message below."
  fields:
    - { name: "firstName", label: "First name",     type: "text" }
    - { name: "lastName",  label: "Last name",      type: "text" }
    - { name: "email",     label: "Email address",  type: "email" }
    - { name: "phone",     label: "Phone number",   type: "tel" }
    - { name: "subject",   label: "Nature of your issue", type: "text" }
    - { name: "message",   label: "Your message",   type: "textarea" }
  clinicQuestion: "At what location would you like to see us? *"
  clinicOptions: ["Talence", "Mérignac", "Bordeaux"]
  contactPreferenceQuestion: "How shall we get back to you? *"
  contactPreferenceOptions: ["Email", "Phone"]
  submit: "Submit"

## Footer
socialLabel: "Social Media"   # instagram, tiktok, facebook, linkedin, youtube
navLabel: "Navigation"
nav: ["Fabien", "Expertise", "Services", "Reviews", "Clinics"]
contactLabel: "Contact"
phone: "06 98 69 48 59"
email: "contact@fabienmarieosteo.fr"
