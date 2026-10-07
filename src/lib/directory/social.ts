export type SocialNetwork =
  | "facebook"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "x"
  | "nextdoor"
  | "linkedin"
  | "pinterest";

export const SOCIAL_LABELS: Record<SocialNetwork, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  x: "X",
  nextdoor: "Nextdoor",
  linkedin: "LinkedIn",
  pinterest: "Pinterest",
};

const SOCIAL_ORDER: SocialNetwork[] = [
  "facebook",
  "instagram",
  "tiktok",
  "youtube",
  "x",
  "nextdoor",
  "linkedin",
  "pinterest",
];

export function listingSocialLinks(
  slug: string,
  facts?: { yelpUrl?: string | null; googleUrl?: string | null },
): { label: string; href: string }[] {
  const row = SOCIAL[slug] ?? {};
  const links = SOCIAL_ORDER.flatMap((key) => {
    const href = row[key];
    return href ? [{ label: SOCIAL_LABELS[key], href }] : [];
  });
  if (facts?.yelpUrl) links.push({ label: "Yelp", href: facts.yelpUrl });
  if (facts?.googleUrl) links.push({ label: "Google", href: facts.googleUrl });
  return links;
}

/** Profile links read on each company's own website, plus a few confirmed public profiles. */
export const SOCIAL: Record<string, Partial<Record<SocialNetwork, string>>> = {
  "freds-junk-removal": {
    facebook: "https://www.facebook.com/619junkremoval",
    youtube: "https://www.youtube.com/@FredsjunkremovalSanDiegoCA",
    x: "https://twitter.com/sdjunkremoval",
  },
  "junk-punch": {
    facebook: "https://www.facebook.com/Junk-Punch-Junk-Removal-109971701422246",
    instagram: "https://www.instagram.com/junkpunch_junkremoval",
    youtube: "https://www.youtube.com/@junkpunchjunkremoval",
  },
  "the-wreckin-haul": {
    facebook: "https://www.facebook.com/TWHaul",
    instagram: "https://www.instagram.com/twh_junkremoval",
  },
  "junk-guys-san-diego": {
    youtube: "https://www.youtube.com/channel/UC0_26zAwO6cNV2ENr2yvFaA",
  },
  "dmd-junk-removal": {
    facebook: "https://www.facebook.com/DMDumping",
    instagram: "https://www.instagram.com/dmd_junkremoval",
    tiktok: "https://www.tiktok.com/@dmd.junk.removal",
  },
  "the-hauler": {
    youtube: "https://www.youtube.com/channel/UCyMlsH6kc9eRTJInaktRZWA",
  },
  "ace-hauling": {
    facebook: "https://www.facebook.com/acedemolition",
    instagram: "https://www.instagram.com/acedemolition",
    tiktok: "https://www.tiktok.com/@acedemolition",
    youtube: "https://www.youtube.com/user/acehauling",
  },
  "junk-fairy": {
    facebook: "https://www.facebook.com/1150179928442245",
    instagram: "https://www.instagram.com/junk_fairy",
    youtube: "https://www.youtube.com/@junk_fairy",
  },
  "haul-away-any-day": {
    facebook: "https://www.facebook.com/Haul-away-any-day-101138955878251",
    instagram: "https://www.instagram.com/haulawayanyday",
  },
  "junkmates": {
    facebook: "https://www.facebook.com/junkmatessd",
    instagram: "https://www.instagram.com/thejunkmates",
  },
  "the-hauling-crew": {
    facebook: "https://www.facebook.com/people/The-Hauling-Crew/61566069386920",
  },
  "sa-junk-haul": {
    instagram: "https://www.instagram.com/sajunkhaul",
  },
  "severin-hauling": {
    facebook: "https://www.facebook.com/severinhauling",
    instagram: "https://www.instagram.com/severinhauling",
  },
  "haul-out": {
    facebook: "https://www.facebook.com/people/Haul-Out-Junk-Removal/61561182448441",
    instagram: "https://www.instagram.com/hauloutjunkremoval",
    nextdoor: "https://nextdoor.com/pages/haul-out-junk-removal-carlsbad-ca",
  },
  "demo-diego": {
    facebook: "https://www.facebook.com/demodiego",
    instagram: "https://www.instagram.com/demodiego",
  },
  "the-junk-transporter": {
    facebook: "https://www.facebook.com/233263644140242",
    instagram: "https://www.instagram.com/thejunktransporter",
  },
  "junkmd": {
    facebook: "https://www.facebook.com/junkmd",
    instagram: "https://www.instagram.com/thejunkmd",
    youtube: "https://www.youtube.com/c/JunkMD",
  },
  "priority-hauling": {
    facebook: "https://www.facebook.com/Priority-Hauling-San-Diego-102357021637725",
    instagram: "https://www.instagram.com/priorityhaulingsd",
  },
  "pick-and-dump": {
    facebook: "https://www.facebook.com/people/Pick-and-Dump-Junk-Removal-and-Hauling/100069787010471",
    instagram: "https://www.instagram.com/pickanddump",
  },
  "crisan-junk-removal": {
    facebook: "https://www.facebook.com/crisanjunkremoval",
    instagram: "https://www.instagram.com/crisanjunkremoval",
    youtube: "https://www.youtube.com/@crisanjunkremoval",
    linkedin: "https://www.linkedin.com/company/crisan-junk-removal",
  },
  "jc-junk-removal": {
    facebook: "https://www.facebook.com/p/JC-Junk-Removal-Services-61561460283558",
    instagram: "https://www.instagram.com/jcjunkremovalservices",
  },
  "junk-junkys": {
    facebook: "https://www.facebook.com/Junk-Junkys-102802418405378",
    instagram: "https://www.instagram.com/junkjunkyss",
    linkedin: "https://www.linkedin.com/company/junk-junkys",
    pinterest: "https://www.pinterest.com/junkjunkys",
  },
  "bay-junk": {
    facebook: "https://www.facebook.com/bayjunk",
    x: "https://twitter.com/BayJunk",
    pinterest: "https://www.pinterest.com/bayjunk",
  },
  "junk-away-san-diego": {
    facebook: "https://www.facebook.com/JunkAwaySD",
    instagram: "https://www.instagram.com/junkawaysandiego",
    tiktok: "https://www.tiktok.com/@junkawaysd",
    youtube: "https://www.youtube.com/@JunkAwaySanDiego",
    x: "https://x.com/JunkAwaySD",
  },
  "clear-junk-removal": {
    facebook: "https://www.facebook.com/clearjunkremoval",
    nextdoor: "https://nextdoor.com/!9VG4EX",
  },
  "pacific-rim-junk": {
    instagram: "https://www.instagram.com/pacific_rim_junk",
  },
  "fetch-junk": {
    facebook: "https://www.facebook.com/FETCH-Junk-Removal-107145638643399",
    instagram: "https://www.instagram.com/fetchjunk",
  },
  "you-call-it-we-haul-it": {
    facebook: "https://www.facebook.com/401141130677777",
    instagram: "https://www.instagram.com/youcallitwehaulit",
  },
  "junk-haul-team": {
    instagram: "https://www.instagram.com/junk_haul_team",
  },
  "gabriels-junk-removal": {
    facebook: "https://www.facebook.com/GabrielsJunkRemoval",
    instagram: "https://www.instagram.com/gabriels.junkremoval_sd",
    linkedin: "https://www.linkedin.com/company/gabriel-s-junk-removal",
  },
  "impact-environmental": {
    youtube: "https://www.youtube.com/@impacteco",
  },
  "top-tier-junk-removal": {
    facebook: "https://www.facebook.com/801717963528223",
  },
  "247-junk-removal": {
    facebook: "https://www.facebook.com/twentyfour7junkremoval",
    instagram: "https://www.instagram.com/247junkremovalllc",
    x: "https://twitter.com/7Removal",
  },
  "jakes-junk-removal": {
    instagram: "https://www.instagram.com/jakesjunkremoval",
  },
  "american-haul-away": {
    facebook: "https://www.facebook.com/AmericanHaulAway",
    instagram: "https://www.instagram.com/americanhaulaway",
    youtube: "https://www.youtube.com/channel/UCWTyPD9g9F52aySlRd6gRiA",
  },
  "junk-seekers": {
    facebook: "https://www.facebook.com/sandiegojunkseekers",
    instagram: "https://www.instagram.com/sdjunkseekers",
    youtube: "https://www.youtube.com/@JunkSeekers",
  },
  "johans-junk-removal": {
    facebook: "https://www.facebook.com/Johansjunkremoval",
    instagram: "https://www.instagram.com/johansjunkremoval",
  },
  "monarch-junk-removal": {
    instagram: "https://www.instagram.com/monarch_junk_removal",
  },
  "a-and-n-coastal-hauling": {
    facebook: "https://www.facebook.com/AandNCoastalHauling",
    instagram: "https://www.instagram.com/aandnhaulinganddemolition",
    x: "https://x.com/AandNDemolition",
  },
  "no-limit-hauling": {
    facebook: "https://www.facebook.com/NoLimitHauling",
  },
  "rancho-removal": {
    instagram: "https://www.instagram.com/ranchoremoval",
  },
  "pick-ur-junk": {
    facebook: "https://www.facebook.com/pickurjunk",
    instagram: "https://www.instagram.com/pickurjunk",
  },
  "asap-junk-hauling": {
    facebook: "https://www.facebook.com/asapjunk",
    instagram: "https://www.instagram.com/asapjunkhaul",
  },
};
