export interface Announcement {
  slug: string;
  title: string;
  date: string;
  preview: string;
  body: string;
}

export const announcements: Announcement[] = [
  {
    slug: "spring-invitational-2026-results",
    title: "Spring Invitational 2026 — MTFC Takes 3 Golds",
    date: "2026-05-28",
    preview:
      "Exceptional performances across all weapon groups at the Pacific Northwest Spring Invitational. Three gold medals, two silvers, and four bronze placements for MTFC athletes.",
    body: `Exceptional performances across all weapon groups at the Pacific Northwest Spring Invitational held in Seattle last weekend. Three gold medals, two silvers, and four bronze placements mark our strongest regional showing in club history.

Highlights from the podium:

- **Foil Senior Open** — Jordan Alvarez, Gold
- **Épée Junior U17** — Maya Okonkwo, Gold
- **Foil Junior U14** — Sam Reinholt, Gold
- **Épée Senior Open** — Priya Desai, Silver
- **Foil Junior U17** — Caleb Sung, Silver

Coach Marcus Reid: "This result reflects months of disciplined training. Every athlete on that podium earned it through real work, not shortcuts."

Full results are posted on the USFA tournament page. Congratulations to every MTFC competitor — medalists and non-medalists alike.`,
  },
  {
    slug: "summer-session-enrollment-open",
    title: "Summer Session Enrollment Now Open",
    date: "2026-05-15",
    preview:
      "Registration for Summer 2026 group classes is live in ZenPlanner. Foil and épée beginner through advanced tracks available. Limited spots — secure yours early.",
    body: `Registration for Summer 2026 group classes is now live in ZenPlanner. We're running four tracks across both weapons:

**Foil**
- Beginner (no experience required) — Mon/Wed 6:00–7:30 PM
- Intermediate — Tue/Thu 6:00–7:30 PM
- Advanced — Sat 9:00 AM–12:00 PM

**Épée**
- Beginner — Mon/Wed 7:30–9:00 PM
- Advanced — Tue/Thu 7:30–9:00 PM

**Junior Programs (ages 8–17)**
- Foil Junior Beginner — Sat 1:00–2:30 PM
- Foil/Épée Junior Competitive — Sat 2:30–5:00 PM

Session runs June 16 – August 22. Drop-in passes are available for Advanced tracks only. Beginner and Intermediate require full session enrollment.

Enrollment link is on the Schedule page. Questions? Email us at info@mtfencing.com.`,
  },
  {
    slug: "guest-coach-workshop-june",
    title: "Guest Coach Workshop — June 14",
    date: "2026-05-10",
    preview:
      "MTFC is hosting an intensive workshop with two-time Olympian and national team coach Elena Vasquez on June 14. Open to Intermediate and Advanced members only.",
    body: `MTFC is hosting a rare intensive workshop with two-time Olympian and former US national team coach **Elena Vasquez** on Saturday, June 14.

The workshop runs 10:00 AM – 2:00 PM at the main salle. Topics:

- Distance and timing in modern foil at the national level
- Tactical preparation for tournament pools vs. direct elimination
- Mental framework for high-pressure bouts
- Live drilling and bout analysis with video review

**Open to:** Intermediate and Advanced members only (minimum 1 year of group class experience).
**Capacity:** 16 fencers maximum.
**Cost:** $85 per fencer (member discount applies — $65 for full-session enrolled members).

Reserve your spot via ZenPlanner. This will fill quickly — we capped the last workshop and turned people away. Don't wait.`,
  },
  {
    slug: "gear-day-may-2026",
    title: "Annual Gear Day — May 31",
    date: "2026-04-30",
    preview:
      "Bring your equipment for inspection, sharpening, and fitting adjustments. Club gear sale with discounts on masks, gloves, and uniforms. All levels welcome.",
    body: `Mark your calendar: Gear Day is Saturday, May 31 from 11:00 AM – 3:00 PM at the club.

**What's happening:**

- Equipment inspection and basic repairs by our armorer
- Mask refurbishment and strap replacement
- Blade sharpening and tip checks for épée
- Fitting sessions for new uniforms and gloves
- **Club gear sale** — discounted inventory on masks (CE 350N and CE 1600N), gloves, plastrons, and jackets. First-come, first-served on sale items.

New members: this is the best time to get properly fitted and to check that any used equipment you've acquired meets club safety standards.

No appointment needed. Walk in during open hours. Bring all your gear.`,
  },
  {
    slug: "updated-club-hours-fall-2026",
    title: "Updated Club Hours Beginning September 2026",
    date: "2026-04-15",
    preview:
      "MTFC will expand open-fencing hours starting September 2026 with the addition of Sunday afternoon sessions and extended Thursday evening availability.",
    body: `Starting September 2026, MTFC is expanding availability with updated open-fencing hours:

**New Schedule (effective September 8, 2026)**

| Day | Hours | Type |
|-----|-------|------|
| Monday | 5:30 PM – 9:30 PM | Group classes + open fencing |
| Tuesday | 5:30 PM – 9:30 PM | Group classes + open fencing |
| Wednesday | 5:30 PM – 9:30 PM | Group classes + open fencing |
| Thursday | 5:30 PM – **10:00 PM** | Group classes + open fencing (extended) |
| Saturday | 9:00 AM – 5:00 PM | Group classes + open fencing |
| **Sunday** | **1:00 PM – 5:00 PM** | Open fencing (new) |

Thursday evening is extended by 30 minutes to accommodate the competitive training group.
Sunday sessions are open fencing only — no structured classes on Sundays.

The facility will be fully staffed during all open hours. Private lesson scheduling is unaffected by these changes — book through ZenPlanner as usual.`,
  },
];
