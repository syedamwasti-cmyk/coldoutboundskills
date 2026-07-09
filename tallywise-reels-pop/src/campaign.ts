/**
 * campaign.ts — Tallywise Reels BATCH 4: Pop-Culture (general small business, LOCKED COPY).
 *
 * 20 reels, one theme: reel-pop-1 .. reel-pop-20.
 * Each hook rides a recognizable cultural reference (parody / allusion), then lands
 * the same deadpan point: know your money. Not industry-specific — these fit ANY
 * small business. The joke punches at the money pain, never the owner.
 *
 * Separate batch — zero overlap with Batch 1 (the 6 originals), Batch 2 (15 themes),
 * or Batch 3 (contractors).
 *
 * RENDER IT, DON'T REWRITE IT. The references only work because the phrasing is exact.
 * Design/logo/CTA are the shared files (Reel.tsx / Logo.tsx), so these stay identical.
 */

import {ReelData} from './Reel';

const CTA = 'Free Cash Flow Dashboard';

export const CAMPAIGN: ReelData[] = [
  {
    id: "reel-pop-1",
    title: "This Is Fine",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "You're sipping coffee"}], [{t: "while the P&L"}], [{t: "is on fire."}]]},
      {dur: 120, fontSize: 98, lines: [[{t: "'This is fine'"}], [{t: "is not an"}], [{t: "accounting method.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "That smoke was"}], [{t: "your margin"}], [{t: "leaving the room.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We put the fire out"}], [{t: "before it reaches"}], [{t: "the coffee."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Handle it early."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-2",
    title: "It's RAW",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "Your bookkeeping"}], [{t: "is like the chicken."}], [{t: "It's RAW."}]]},
      {dur: 120, fontSize: 98, lines: [[{t: "Undercooked numbers"}], [{t: "will make"}], [{t: "someone sick.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "Usually it's"}], [{t: "the person"}], [{t: "signing the checks.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We serve your"}], [{t: "numbers done,"}], [{t: "not still mooing."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Get it cooked."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-3",
    title: "The Snap",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "Half your profit"}], [{t: "vanished and"}], [{t: "nobody saw it go."}]]},
      {dur: 120, fontSize: 104, lines: [[{t: "That wasn't fate."}], [{t: "It was"}], [{t: "fees.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "A snap of small"}], [{t: "charges you"}], [{t: "never tracked.", g: true}]]},
      {dur: 108, fontSize: 108, allGreen: true, lines: [[{t: "We find the"}], [{t: "half that"}], [{t: "disappeared."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Undo the snap."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-4",
    title: "Once Again Asking",
    cards: [
      {dur: 120, fontSize: 100, lines: [[{t: "We are once"}], [{t: "again asking"}], [{t: "where the money went."}]]},
      {dur: 120, fontSize: 106, lines: [[{t: "Not a donation."}], [{t: "A "}, {t: "leak.", g: true}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "It left in small"}], [{t: "amounts you"}], [{t: "called 'nothing.'", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We track every"}], [{t: "dollar so"}], [{t: "you stop asking."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Find the leak."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-5",
    title: "The Subscription Games",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "Your subscriptions"}], [{t: "are playing"}], [{t: "a little game."}]]},
      {dur: 120, fontSize: 92, lines: [[{t: "Every month one"}], [{t: "more "}, {t: "eliminates", g: true}], [{t: "your cash.", g: true}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "You're funding"}], [{t: "apps you"}], [{t: "forgot you joined.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We end the game"}], [{t: "before it ends"}], [{t: "your budget."}]]},
      {dur: 102, fontSize: 96, lines: [[{t: "Cancel the players."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-6",
    title: "Does It Spark Joy",
    cards: [
      {dur: 120, fontSize: 96, lines: [[{t: "Hold up each expense."}], [{t: "Ask: does it"}], [{t: "spark joy?"}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "That $89 tool"}], [{t: "from March"}], [{t: "sparks nothing.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "It's been"}], [{t: "auto-renewing", g: true}], [{t: "in silence."}]]},
      {dur: 108, fontSize: 102, allGreen: true, lines: [[{t: "We keep what earns"}], [{t: "and thank"}], [{t: "the rest goodbye."}]]},
      {dur: 102, fontSize: 102, lines: [[{t: "Tidy the spend."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-7",
    title: "Find the Difference",
    cards: [
      {dur: 120, fontSize: 100, lines: [[{t: "Corporate needs you"}], [{t: "to find"}], [{t: "the difference..."}]]},
      {dur: 120, fontSize: 98, lines: [[{t: "Between the"}], [{t: "bank balance"}], [{t: "and the profit.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "They are"}], [{t: "not the", g: true}], [{t: "same picture."}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We show the real"}], [{t: "number, not"}], [{t: "the one that lies."}]]},
      {dur: 102, fontSize: 96, lines: [[{t: "Know the difference."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-8",
    title: "Groundhog Month",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "Same slow month."}], [{t: "Same panic."}], [{t: "Same coffee."}]]},
      {dur: 120, fontSize: 102, lines: [[{t: "You're stuck in"}], [{t: "a cash flow"}], [{t: "time loop.", g: true}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "Every February hits"}], [{t: "like it's"}], [{t: "the first time.", g: true}]]},
      {dur: 108, fontSize: 104, allGreen: true, lines: [[{t: "We forecast the dip"}], [{t: "so the loop"}], [{t: "finally breaks."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Break the loop."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-9",
    title: "A Bigger Boat",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "You looked at"}], [{t: "the tax bill"}], [{t: "and went pale."}]]},
      {dur: 120, fontSize: 96, lines: [[{t: "You're gonna need"}], [{t: "a bigger", g: true}], [{t: "savings account.", g: true}]]},
      {dur: 114, fontSize: 96, lines: [[{t: "The bill was always"}], [{t: "that size."}], [{t: "You weren't ready.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We set the tax"}], [{t: "aside before"}], [{t: "it surfaces."}]]},
      {dur: 102, fontSize: 102, lines: [[{t: "Beat the bill."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-10",
    title: "The Iceberg",
    cards: [
      {dur: 120, fontSize: 100, lines: [[{t: "The business felt"}], [{t: "unsinkable."}], [{t: "Then, an iceberg."}]]},
      {dur: 120, fontSize: 96, lines: [[{t: "The iceberg was"}], [{t: "a slow season"}], [{t: "you ignored.", g: true}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "You rearranged"}], [{t: "expenses like"}], [{t: "deck chairs.", g: true}]]},
      {dur: 108, fontSize: 108, allGreen: true, lines: [[{t: "We see the ice"}], [{t: "before the"}], [{t: "hull does."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Steer around it."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-11",
    title: "Sell Me This Pen",
    cards: [
      {dur: 120, fontSize: 108, lines: [[{t: "You can sell"}], [{t: "anyone"}], [{t: "anything."}]]},
      {dur: 120, fontSize: 104, lines: [[{t: "But you can't"}], [{t: "tell me"}], [{t: "your margin.", g: true}]]},
      {dur: 114, fontSize: 96, lines: [[{t: "Great at the close,"}], [{t: "blind", g: true}], [{t: "on the math.", g: true}]]},
      {dur: 108, fontSize: 104, allGreen: true, lines: [[{t: "We hand you the"}], [{t: "margin before"}], [{t: "you pitch the pen."}]]},
      {dur: 102, fontSize: 98, lines: [[{t: "Sell with numbers."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-12",
    title: "Do Not Pass Go",
    cards: [
      {dur: 120, fontSize: 100, lines: [[{t: "Tax season: go"}], [{t: "directly to"}], [{t: "a cold sweat."}]]},
      {dur: 120, fontSize: 94, lines: [[{t: "Do not pass go."}], [{t: "Do not collect"}], [{t: "a refund.", g: true}]]},
      {dur: 114, fontSize: 96, lines: [[{t: "You landed on a"}], [{t: "bill you"}], [{t: "didn't budget for.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We keep you off"}], [{t: "that square"}], [{t: "all year."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Stay out of jail."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-13",
    title: "The Upside Down",
    cards: [
      {dur: 120, fontSize: 104, lines: [[{t: "Your P&L looks"}], [{t: "normal."}], [{t: "Then it flips."}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "Welcome to the"}], [{t: "Upside Down", g: true}], [{t: "of profit."}]]},
      {dur: 114, fontSize: 96, lines: [[{t: "Revenue up top,"}], [{t: "nothing"}], [{t: "underneath.", g: true}]]},
      {dur: 108, fontSize: 102, allGreen: true, lines: [[{t: "We drag your"}], [{t: "numbers back"}], [{t: "to the right side up."}]]},
      {dur: 102, fontSize: 102, lines: [[{t: "Flip it back."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-14",
    title: "A Charge Within a Charge",
    cards: [
      {dur: 120, fontSize: 92, lines: [[{t: "There's a charge"}], [{t: "inside a charge"}], [{t: "inside a charge."}]]},
      {dur: 120, fontSize: 98, lines: [[{t: "A subscription"}], [{t: "bundled in a"}], [{t: "subscription.", g: true}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "You need a kick"}], [{t: "just to wake up", g: true}], [{t: "and cancel."}]]},
      {dur: 108, fontSize: 104, allGreen: true, lines: [[{t: "We go a level"}], [{t: "deeper so"}], [{t: "you don't have to."}]]},
      {dur: 102, fontSize: 102, lines: [[{t: "Cut the layers."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-15",
    title: "The Mattress Strategy",
    cards: [
      {dur: 120, fontSize: 100, lines: [[{t: "Your money strategy"}], [{t: "is basically"}], [{t: "a mattress."}]]},
      {dur: 120, fontSize: 98, lines: [[{t: "No plan."}], [{t: "Just suspicion", g: true}], [{t: "and cash.", g: true}]]},
      {dur: 114, fontSize: 92, lines: [[{t: "A mattress doesn't"}], [{t: "tell you", g: true}], [{t: "if you're profitable."}]]},
      {dur: 108, fontSize: 104, allGreen: true, lines: [[{t: "We give you a plan"}], [{t: "the mattress"}], [{t: "never could."}]]},
      {dur: 102, fontSize: 94, lines: [[{t: "Upgrade the mattress."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-16",
    title: "Show Me the Money",
    cards: [
      {dur: 120, fontSize: 100, lines: [[{t: "You keep yelling"}], [{t: "'show me"}], [{t: "the money.'"}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "It's right there."}], [{t: "You're just"}], [{t: "not looking.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "Buried under"}], [{t: "receipts and"}], [{t: "good intentions.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We show you the"}], [{t: "money, every"}], [{t: "single week."}]]},
      {dur: 102, fontSize: 102, lines: [[{t: "See the money."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-17",
    title: "Winter Is Coming",
    cards: [
      {dur: 120, fontSize: 102, lines: [[{t: "Everyone's relaxed."}], [{t: "But winter"}], [{t: "is coming."}]]},
      {dur: 120, fontSize: 104, lines: [[{t: "Winter is"}], [{t: "your slow", g: true}], [{t: "quarter.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "And you've saved"}], [{t: "exactly"}], [{t: "nothing for it.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We stock the cash"}], [{t: "before the"}], [{t: "cold hits."}]]},
      {dur: 102, fontSize: 100, lines: [[{t: "Prep for winter."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-18",
    title: "Houston, We Have a Problem",
    cards: [
      {dur: 120, fontSize: 94, lines: [[{t: "Payroll's Friday."}], [{t: "Houston, we"}], [{t: "have a problem."}]]},
      {dur: 120, fontSize: 98, lines: [[{t: "The client who"}], [{t: "owes you is"}], [{t: "'traveling.'", g: true}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "Your runway is"}], [{t: "shorter", g: true}], [{t: "than the invoice."}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We flag the"}], [{t: "crunch days"}], [{t: "before liftoff."}]]},
      {dur: 102, fontSize: 98, lines: [[{t: "Abort the crisis."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-19",
    title: "May the Odds Be Ever",
    cards: [
      {dur: 120, fontSize: 98, lines: [[{t: "You priced the job"}], [{t: "and whispered"}], [{t: "good luck."}]]},
      {dur: 120, fontSize: 98, lines: [[{t: "May the odds"}], [{t: "be ever"}], [{t: "in your margin.", g: true}]]},
      {dur: 114, fontSize: 100, lines: [[{t: "Pricing by luck"}], [{t: "is a"}], [{t: "hunger game.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We rig the odds"}], [{t: "with actual"}], [{t: "numbers."}]]},
      {dur: 102, fontSize: 102, lines: [[{t: "Stop gambling."}]], cta: CTA},
    ],
  },
  {
    id: "reel-pop-20",
    title: "Ogres Have Layers",
    cards: [
      {dur: 120, fontSize: 100, lines: [[{t: "Your costs are"}], [{t: "like ogres."}], [{t: "They have layers."}]]},
      {dur: 120, fontSize: 100, lines: [[{t: "Peel one back,"}], [{t: "there's a fee", g: true}], [{t: "underneath."}]]},
      {dur: 114, fontSize: 98, lines: [[{t: "You only counted"}], [{t: "the layer"}], [{t: "you could see.", g: true}]]},
      {dur: 108, fontSize: 106, allGreen: true, lines: [[{t: "We peel every"}], [{t: "layer so"}], [{t: "nothing hides."}]]},
      {dur: 102, fontSize: 102, lines: [[{t: "Peel the onion."}]], cta: CTA},
    ],
  },
];
