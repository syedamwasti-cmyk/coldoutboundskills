/**
 * campaign.ts — Tallywise Reels BATCH 3: Construction / Contractors (LOCKED COPY).
 *
 * 20 reels, one theme: reel-contractor-1 .. reel-contractor-20.
 * Voice: deadpan, confident, in-group. The joke always punches at the PAIN
 * (bad math, floated payroll, the glovebox), never at the contractor.
 *
 * This is a separate batch — zero overlap with Batch 1 (cashflow/forecasting/
 * estimating/jobcosting/taxes/payroll) or Batch 2 (the 15 other themes).
 *
 * RENDER IT, DON'T REWRITE IT. Design/logo/CTA are shared (Reel.tsx / Logo.tsx),
 * so every reel stays identical to the rest of the campaign.
 */

import {ReelData} from './Reel';

const CTA = 'Free Cash Flow Dashboard';

export const CAMPAIGN: ReelData[] = [
  {
    id: "reel-contractor-1",
    title: "The Driveway Change Order",
    cards: [
      {dur: 120, fontSize: 106, lines: [[{t: "The change order"}], [{t: "was a handshake"}], [{t: "in the driveway."}]]},
      {dur: 120, fontSize: 102, lines: [[{t: "A handshake"}], [{t: "isn't a paper trail."}], [{t: "It's a "}, {t: "rumor.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "So you "}, {t: "ate the extra", g: true}], [{t: "framing and"}], [{t: "smiled about it."}]]},
      {dur: 108, fontSize: 108, allGreen: true, lines: [[{t: "We turn driveway"}], [{t: "deals into"}], [{t: "signed line items."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Get it in writing."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-2",
    title: "Bookkeeping by Glovebox",
    cards: [
      {dur: 120, fontSize: 106, lines: [[{t: "Your bookkeeping"}], [{t: "system is"}], [{t: "the glovebox."}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "Six months of"}], [{t: "receipts and"}], [{t: "one melted pen.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "At tax time you"}], [{t: "hand it over as"}], [{t: "a shoebox.", g: true}]]},
      {dur: 108, fontSize: 108, allGreen: true, lines: [[{t: "We read the"}], [{t: "glovebox so"}], [{t: "April doesn't."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Ditch the shoebox."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-3",
    title: "An Echo, Not Cash Flow",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "You just got paid"}], [{t: "for a job you"}], [{t: "finished in March."}]]},
      {dur: 120, fontSize: 104, lines: [[{t: "That's not"}], [{t: "cash flow."}], [{t: "That's an "}, {t: "echo.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "You floated the crew"}], [{t: "with a "}, {t: "credit card.", g: true}], [{t: "Again."}]]},
      {dur: 108, fontSize: 108, allGreen: true, lines: [[{t: "We see the gap"}], [{t: "before it eats"}], [{t: "the payroll."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Close the gap."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-4",
    title: "You're Not Profitable, You're Rotating",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "The deposit for"}], [{t: "this job paid"}], [{t: "for the last one."}]]},
      {dur: 120, fontSize: 104, lines: [[{t: "You're not"}], [{t: "profitable."}], [{t: "You're "}, {t: "rotating.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "One slow month"}], [{t: "and the whole thing"}], [{t: "stops spinning.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We tell you which"}], [{t: "dollars are yours"}], [{t: "and which are borrowed."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Stop the rotation."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-5",
    title: "You Won a Loss",
    cards: [
      {dur: 120, fontSize: 106, lines: [[{t: "You won the bid."}], [{t: "Congrats."}], [{t: "You won a loss."}]]},
      {dur: 120, fontSize: 102, lines: [[{t: "Lowest price"}], [{t: "isn't a strategy."}], [{t: "It's a "}, {t: "countdown.", g: true}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "The guy who lost"}], [{t: "the bid "}, {t: "kept his margin.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We price to"}], [{t: "build a business,"}], [{t: "not just win a job."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Bid to keep it."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-6",
    title: "Booked and Broke",
    cards: [
      {dur: 120, fontSize: 106, lines: [[{t: "You're booked"}], [{t: "eight weeks out"}], [{t: "and dead broke."}]]},
      {dur: 120, fontSize: 104, lines: [[{t: "Busy is"}], [{t: "not the same", g: true}], [{t: "as paid."}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "More jobs just meant"}], [{t: "more ways to"}], [{t: "lose money.", g: true}]]},
      {dur: 108, fontSize: 108, allGreen: true, lines: [[{t: "We chase profit,"}], [{t: "not just"}], [{t: "the schedule."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Booked and paid."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-7",
    title: "You Bid January, Built June",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "You bid the lumber"}], [{t: "in January."}], [{t: "Built it in June."}]]},
      {dur: 120, fontSize: 104, lines: [[{t: "The price moved."}], [{t: "Your quote"}], [{t: "didn't.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "You paid the"}], [{t: "difference and called"}], [{t: "it 'the market.'", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We build price"}], [{t: "swings into the bid,"}], [{t: "not the loss."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Bid for June."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-8",
    title: "A Bank That Frames Houses",
    cards: [
      {dur: 120, fontSize: 106, lines: [[{t: "The job's done."}], [{t: "The check is"}], [{t: "'in the mail.'"}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "Retainage is"}], [{t: "your money"}], [{t: "on their couch.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "You're a bank"}], [{t: "that framed a"}], [{t: "house "}, {t: "for free.", g: true}]]},
      {dur: 108, fontSize: 108, allGreen: true, lines: [[{t: "We track every"}], [{t: "dollar owed"}], [{t: "until it lands."}]]},
      {dur: 102, fontSize: 96, lines: [[{t: "Collect the last 10%."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-9",
    title: "The Surprise Party",
    cards: [
      {dur: 120, fontSize: 100, lines: [[{t: "You'll know if this"}], [{t: "job made money"}], [{t: "when it's over."}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "That's not"}], [{t: "management."}], [{t: "That's a "}, {t: "surprise party.", g: true}]]},
      {dur: 114, fontSize: 102, lines: [[{t: "Half the time"}], [{t: "it's "}, {t: "not the fun kind.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We cost the job"}], [{t: "while you can"}], [{t: "still fix it."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Know by Tuesday."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-10",
    title: "Everybody Eats But You",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "Friday: you pay"}], [{t: "the crew."}], [{t: "Everybody eats."}]]},
      {dur: 120, fontSize: 102, lines: [[{t: "Except the guy"}], [{t: "signing", g: true}], [{t: "the checks.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "You take owner pay"}], [{t: "whenever", g: true}], [{t: "there's some left."}]]},
      {dur: 108, fontSize: 108, allGreen: true, lines: [[{t: "We pay the owner"}], [{t: "like a"}], [{t: "real expense."}]]},
      {dur: 102, fontSize: 98, lines: [[{t: "Pay yourself first."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-11",
    title: "Quoting From Memory",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "You quote by"}], [{t: "the square foot"}], [{t: "from memory."}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "Your memory"}], [{t: "doesn't track"}], [{t: "diesel prices.", g: true}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "The number that felt"}], [{t: "right in 2021 is"}], [{t: "losing money.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We build estimates"}], [{t: "off real costs,"}], [{t: "not old habits."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Quote from data."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-12",
    title: "This Winter",
    cards: [
      {dur: 120, fontSize: 108, lines: [[{t: "You'll do the"}], [{t: "books "}, {t: "'this winter.'"}]]},
      {dur: 120, fontSize: 104, lines: [[{t: "Winter comes."}], [{t: "So does"}], [{t: "another job.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "The books are"}], [{t: "three years of"}], [{t: "good intentions.", g: true}]]},
      {dur: 108, fontSize: 104, allGreen: true, lines: [[{t: "We keep them current"}], [{t: "so winter"}], [{t: "stays a season."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Books, done monthly."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-13",
    title: "Nine Subs, No 1099s",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "You paid nine subs"}], [{t: "in cash and"}], [{t: "a handshake."}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "January wants"}], [{t: "nine 1099s", g: true}], [{t: "you never made."}]]},
      {dur: 114, fontSize: 94, lines: [[{t: "'I'll remember"}], [{t: "who I paid' is "}, {t: "not", g: true}], [{t: "a filing system.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We track every sub"}], [{t: "so tax season"}], [{t: "is boring."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "1099s handled."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-14",
    title: "The Iron Nobody Sees",
    cards: [
      {dur: 120, fontSize: 106, lines: [[{t: "The truck, the"}], [{t: "trailer, the"}], [{t: "skid steer."}]]},
      {dur: 120, fontSize: 102, lines: [[{t: "Three payments"}], [{t: "no job"}], [{t: "actually sees.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "Overhead you forgot"}], [{t: "is overhead"}], [{t: "that eats you.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We put the iron"}], [{t: "into every"}], [{t: "bid you send."}]]},
      {dur: 102, fontSize: 96, lines: [[{t: "Cover the overhead."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-15",
    title: "Free Trip Back",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "You drove back"}], [{t: "for the punch"}], [{t: "list. Free."}]]},
      {dur: 120, fontSize: 102, lines: [[{t: "Gas, hours,"}], [{t: "the helper,"}], [{t: "all on you.", g: true}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "'Making it right'"}], [{t: "has a cost you"}], [{t: "never counted.", g: true}]]},
      {dur: 108, fontSize: 104, allGreen: true, lines: [[{t: "We price the"}], [{t: "callbacks in before"}], [{t: "you smile and go."}]]},
      {dur: 102, fontSize: 98, lines: [[{t: "Count the callback."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-16",
    title: "You Grew a Treadmill",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "Revenue doubled."}], [{t: "The bank account"}], [{t: "did not."}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "You didn't grow"}], [{t: "a business."}], [{t: "You grew a "}, {t: "treadmill.", g: true}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "More trucks, more"}], [{t: "crew, more stress,"}], [{t: "same wallet.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We grow the margin,"}], [{t: "not just"}], [{t: "the mess."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Grow the margin."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-17",
    title: "It's Not Good News",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "Your accountant"}], [{t: "called."}], [{t: "It's not good news."}]]},
      {dur: 120, fontSize: 98, lines: [[{t: "A tax bill you"}], [{t: "didn't save for.", g: true}], [{t: "Classic."}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "Profit you never"}], [{t: "saw somehow"}], [{t: "owes the IRS.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We set the tax"}], [{t: "aside every"}], [{t: "single job."}]]},
      {dur: 102, fontSize: 96, lines: [[{t: "No April surprises."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-18",
    title: "One Sad Account",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "The business card"}], [{t: "bought groceries."}], [{t: "Again."}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "Personal and"}], [{t: "business share"}], [{t: "one sad account.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "You can't tell"}], [{t: "profit from"}], [{t: "your paycheck.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We split the two"}], [{t: "so the numbers"}], [{t: "mean something."}]]},
      {dur: 102, fontSize: 96, lines: [[{t: "Separate the money."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-19",
    title: "Saturday Math",
    cards: [
      {dur: 120, fontSize: 102, lines: [[{t: "You worked"}], [{t: "Saturday to catch"}], [{t: "up on quotes."}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "Unpaid overtime"}], [{t: "doing "}, {t: "math you hate.", g: true}]]},
      {dur: 114, fontSize: 102, lines: [[{t: "The quotes are late"}], [{t: "and the weekend's"}], [{t: "gone.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We do the numbers"}], [{t: "so Saturday"}], [{t: "is yours."}]]},
      {dur: 102, fontSize: 94, lines: [[{t: "Get your weekend back."}]], cta: CTA},
    ],
  },
  {
    id: "reel-contractor-20",
    title: "The Balance Mirage",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "You check profit"}], [{t: "by looking"}], [{t: "at the bank."}]]},
      {dur: 120, fontSize: 98, lines: [[{t: "That balance owes", g: true}], [{t: "taxes, subs,"}], [{t: "and material."}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "It feels like money"}], [{t: "right up"}], [{t: "until it isn't.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We show real profit,"}], [{t: "not the"}], [{t: "balance mirage."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "See real profit."}]], cta: CTA},
    ],
  },
];
