# 📂 Content Guide — Edit Website Information Here

Saari website ki information in files mein hai. Koi bhi text, number,
logo ya link change karna ho toh sirf yahan edit karo — website automatically
update ho jayegi. Code chhoone ki zaroorat nahi.

| File | Kya badal sakte ho |
| --- | --- |
| `site.ts` | Company naam, tagline, founder, email, phone, WhatsApp number & message, location, social links, navbar menu |
| `stats.ts` | Hero ke neeche wale numbers (projects, clients, experience) |
| `services.ts` | Services ke naam, description, features, pricing |
| `projects.ts` | Portfolio projects, case studies, categories (filter) |
| `clients.ts` | Client logos & names (marquee section) |
| `process.ts` | Mission steps 01–06 (Discover → Support & Scale) |
| `testimonials.ts` | Client reviews / quotes |
| `faqs.ts` | FAQ section ke questions & answers |

## Common edits

**WhatsApp number badalna:** `site.ts` mein `whatsappNumber` change karo
(`91XXXXXXXXXX` format, bina + ke). WhatsApp button + form dono update ho jayenge.

**Naya client logo add karna:**
1. Logo file `src/assets/` mein daalo
2. `clients.ts` mein upar import karo aur list mein `{ name, logo }` add karo

**Naya project add karna:** `projects.ts` mein list ke andar naya object add karo —
filter buttons automatically ban jayenge.
