/**
 * carousels.ts — LOCKED carousel copy. Render it, don't rewrite it.
 * Same voice as the reels: deadpan, funny, punch at the money pain.
 */
import {CarouselData} from './Carousel';

const CTA = 'Free Cash Flow Dashboard';

export const CAROUSELS: CarouselData[] = [
  {
    id: "carousel-busy-1",
    title: "Busy All Year, Still Broke",
    chip: "Busy ≠ Profitable",
    cover: {
      // image: "busy-1.png",   // <- drop the illustration in public/covers/ and uncomment
      headline: [[{t: "Busy all year."}], [{t: "Still broke."}]],
    },
    coverPrompt:
      "Comic-book / graphic-novel illustration, dramatic lighting. A small-business owner at a cluttered desk late at night, both hands gripping their hair, teeth clenched in exhausted frustration. Desk buried in invoices, a calculator, a glowing laptop. Moody navy-and-teal palette, heavy ink shadows, expressive exaggerated facial expression. Vertical 4:5. Leave the top third darker and less busy for headline text.",
    slides: [
      {dur: 1, fontSize: 96, lines: [[{t: "Being booked solid"}], [{t: "is "}, {t: "not the same", g: true}], [{t: "as being paid."}]]},
      {dur: 1, fontSize: 92, lines: [[{t: "More revenue just"}], [{t: "bought you a bigger"}], [{t: "version of broke.", g: true}]]},
      {dur: 1, fontSize: 94, lines: [[{t: "Every job hides"}], [{t: "a small loss you"}], [{t: "only see at year-end.", g: true}]]},
      {dur: 1, fontSize: 100, allGreen: true, lines: [[{t: "We cost each job"}], [{t: "while it's live,"}], [{t: "so busy means paid."}]]},
      {dur: 1, fontSize: 100, lines: [[{t: "Turn motion"}], [{t: "into margin."}]], cta: CTA},
    ],
  },
];
