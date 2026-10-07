export type SocialNetwork =
  | "facebook"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "x"
  | "nextdoor"
  | "angi"
  | "linkedin"
  | "pinterest";

export const SOCIAL_LABELS: Record<SocialNetwork, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  x: "X",
  nextdoor: "Nextdoor",
  angi: "Angi",
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
  "angi",
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
    nextdoor: "https://nextdoor.com/pages/san-diego-junk-removal-san-diego-ca/",
    angi: "https://www.angi.com/companylist/us/ca/chula-vista/fred%27s-junk-removal-reviews-1935622.htm",
  },
  "junk-punch": {
    facebook: "https://www.facebook.com/Junk-Punch-Junk-Removal-109971701422246",
    instagram: "https://www.instagram.com/junkpunch_junkremoval",
    youtube: "https://www.youtube.com/@junkpunchjunkremoval",
  },
  "the-wreckin-haul": {
    facebook: "https://www.facebook.com/TWHaul",
    instagram: "https://www.instagram.com/twh_junkremoval",
    nextdoor: "https://nextdoor.com/pages/the-wreckin-haul-newberry-springs-ca/",
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
    nextdoor: "https://nextdoor.com/pages/nick-affre-vista-ca/",
  },
  "ace-hauling": {
    facebook: "https://www.facebook.com/acedemolition",
    instagram: "https://www.instagram.com/acedemolition",
    tiktok: "https://www.tiktok.com/@acedemolition",
    youtube: "https://www.youtube.com/user/acehauling",
    angi: "https://www.angi.com/companylist/us/ca/carlsbad/ace-hauling-junk-removal-and-demolition-reviews-367684.htm",
  },
  "junk-fairy": {
    facebook: "https://www.facebook.com/1150179928442245",
    instagram: "https://www.instagram.com/junk_fairy",
    youtube: "https://www.youtube.com/@junk_fairy",
    nextdoor: "https://nextdoor.com/pages/junk-fairy/",
    angi: "https://www.angi.com/companylist/us/ca/san-diego/junk-fairy-reviews-8771607.htm",
  },
  "haul-away-any-day": {
    facebook: "https://www.facebook.com/Haul-away-any-day-101138955878251",
    instagram: "https://www.instagram.com/haulawayanyday",
    nextdoor: "https://nextdoor.com/pages/haul-away-any-day-el-cajon-ca/",
  },
  "junkmates": {
    facebook: "https://www.facebook.com/junkmatessd",
    instagram: "https://www.instagram.com/thejunkmates",
    nextdoor: "https://nextdoor.com/pages/junkmates-cardiff-ca/",
  },
  "the-hauling-crew": {
    facebook: "https://www.facebook.com/people/The-Hauling-Crew/61566069386920",
  },
  "sa-junk-haul": {
    instagram: "https://www.instagram.com/sajunkhaul",
    nextdoor: "https://nextdoor.com/pages/samuel-anderson-san-marcos-ca/",
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
    nextdoor: "https://nextdoor.com/pages/the-junk-transporter-1/",
  },
  "junkmd": {
    facebook: "https://www.facebook.com/junkmd",
    instagram: "https://www.instagram.com/thejunkmd",
    youtube: "https://www.youtube.com/c/JunkMD",
    nextdoor: "https://nextdoor.com/pages/junk-md/",
    angi: "https://www.angi.com/companylist/us/ca/san-diego/junkmd-reviews-8753560.htm",
  },
  "priority-hauling": {
    facebook: "https://www.facebook.com/Priority-Hauling-San-Diego-102357021637725",
    instagram: "https://www.instagram.com/priorityhaulingsd",
    nextdoor: "https://nextdoor.com/pages/priority-hauling-san-diego-san-diego-ca/",
  },
  "pick-and-dump": {
    facebook: "https://www.facebook.com/people/Pick-and-Dump-Junk-Removal-and-Hauling/100069787010471",
    instagram: "https://www.instagram.com/pickanddump",
    nextdoor: "https://nextdoor.com/pages/pick-and-dump-junk-removal-chula-vista-ca/",
  },
  "crisan-junk-removal": {
    facebook: "https://www.facebook.com/crisanjunkremoval",
    instagram: "https://www.instagram.com/crisanjunkremoval",
    youtube: "https://www.youtube.com/@crisanjunkremoval",
    linkedin: "https://www.linkedin.com/company/crisan-junk-removal",
    nextdoor: "https://nextdoor.com/pages/crisan-junk-removal-hauling-san-diego-ca/",
  },
  "jc-junk-removal": {
    facebook: "https://www.facebook.com/p/JC-Junk-Removal-Services-61561460283558",
    instagram: "https://www.instagram.com/jcjunkremovalservices",
    nextdoor: "https://nextdoor.com/pages/jc-junk-removal-services-san-diego-ca/",
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
    nextdoor: "https://nextdoor.com/pages/junk-away-san-diego-carlsbad-ca/",
  },
  "clear-junk-removal": {
    facebook: "https://www.facebook.com/clearjunkremoval",
    nextdoor: "https://nextdoor.com/pages/expert-demo-haul-escondido-ca/",
  },
  "pacific-rim-junk": {
    instagram: "https://www.instagram.com/pacific_rim_junk",
    nextdoor: "https://nextdoor.com/pages/pacific-rim-junk-removal-johnson-city-tx/",
  },
  "fetch-junk": {
    facebook: "https://www.facebook.com/FETCH-Junk-Removal-107145638643399",
    instagram: "https://www.instagram.com/fetchjunk",
    nextdoor: "https://nextdoor.com/pages/fetch-junk-removal-la-mesa-ca/",
  },
  "you-call-it-we-haul-it": {
    facebook: "https://www.facebook.com/401141130677777",
    instagram: "https://www.instagram.com/youcallitwehaulit",
  },
  "junk-haul-team": {
    instagram: "https://www.instagram.com/junk_haul_team",
    nextdoor: "https://nextdoor.com/pages/junk-haul-team-pittsburgh-pa/",
  },
  "gabriels-junk-removal": {
    facebook: "https://www.facebook.com/GabrielsJunkRemoval",
    instagram: "https://www.instagram.com/gabriels.junkremoval_sd",
    linkedin: "https://www.linkedin.com/company/gabriel-s-junk-removal",
    nextdoor: "https://nextdoor.com/pages/gabriels-hauling-demolition-services-san-diego-ca/",
  },
  "impact-environmental": {
    youtube: "https://www.youtube.com/@impacteco",
    nextdoor: "https://nextdoor.com/pages/impact-junk-removal-la-mesa-ca/",
    angi: "https://www.angi.com/companylist/us/ca/el-cajon/impact-environmental-company%2C-inc-reviews-9055522.htm",
  },
  "top-tier-junk-removal": {
    facebook: "https://www.facebook.com/801717963528223",
    nextdoor: "https://nextdoor.com/pages/top-tier-junk-removal-san-diego-ca-1/",
  },
  "247-junk-removal": {
    facebook: "https://www.facebook.com/twentyfour7junkremoval",
    instagram: "https://www.instagram.com/247junkremovalllc",
    x: "https://twitter.com/7Removal",
    nextdoor: "https://nextdoor.com/pages/247-junk-removal-llc/",
  },
  "jakes-junk-removal": {
    instagram: "https://www.instagram.com/jakesjunkremoval",
  },
  "american-haul-away": {
    facebook: "https://www.facebook.com/AmericanHaulAway",
    instagram: "https://www.instagram.com/americanhaulaway",
    youtube: "https://www.youtube.com/channel/UCWTyPD9g9F52aySlRd6gRiA",
    angi: "https://www.angi.com/companylist/us/ca/san-diego/american-haul-away-reviews-9429099.htm",
  },
  "junk-seekers": {
    facebook: "https://www.facebook.com/sandiegojunkseekers",
    instagram: "https://www.instagram.com/sdjunkseekers",
    youtube: "https://www.youtube.com/@JunkSeekers",
    nextdoor: "https://nextdoor.com/pages/junk-seekers-spring-valley-ca/",
  },
  "johans-junk-removal": {
    facebook: "https://www.facebook.com/Johansjunkremoval",
    instagram: "https://www.instagram.com/johansjunkremoval",
    nextdoor: "https://nextdoor.com/pages/johans-junk-removal-and-hauling-san-diego-ca/",
  },
  "monarch-junk-removal": {
    instagram: "https://www.instagram.com/monarch_junk_removal",
  },
  "a-and-n-coastal-hauling": {
    facebook: "https://www.facebook.com/AandNCoastalHauling",
    instagram: "https://www.instagram.com/aandnhaulinganddemolition",
    x: "https://x.com/AandNDemolition",
    nextdoor: "https://nextdoor.com/pages/an-coastal-haulingjunkremovaldemo-vista-ca/",
  },
  "no-limit-hauling": {
    facebook: "https://www.facebook.com/NoLimitHauling",
    nextdoor: "https://nextdoor.com/pages/no-limit-hauling-san-diego-ca-1/",
  },
  "rancho-removal": {
    instagram: "https://www.instagram.com/ranchoremoval",
  },
  "pick-ur-junk": {
    facebook: "https://www.facebook.com/pickurjunk",
    instagram: "https://www.instagram.com/pickurjunk",
    nextdoor: "https://nextdoor.com/pages/pick-ur-junk-vista-ca/",
  },
  "asap-junk-hauling": {
    facebook: "https://www.facebook.com/asapjunk",
    instagram: "https://www.instagram.com/asapjunkhaul",
    nextdoor: "https://nextdoor.com/pages/asap-junk-hauling-san-ysidro-ca/",
  },
  "jb-solutions": {
    angi: "https://www.angi.com/companylist/us/ca/lakeside/j-and-b-solution-reviews-10368460.htm",
  },
  "flash-junk-removal": {
    angi: "https://www.angi.com/companylist/us/ca/vista/flash-junk-removal-reviews-54416470.htm",
  },
  "gti-hauling": {
    nextdoor: "https://nextdoor.com/pages/gti-hauling-poway-ca/",
  },
  "dan-the-man-haul-away": {
    nextdoor: "https://nextdoor.com/pages/dan-the-man-haul-away-santee-ca/",
  },
  "titos-junk-removal": {
    nextdoor: "https://nextdoor.com/pages/a-titos-hauling-san-diego-ca/",
    angi: "https://www.angi.com/companylist/us/ca/san-diego/a-tito%27s-hauling-reviews-177024.htm",
  },
  "coastline-hauling": {
    nextdoor: "https://nextdoor.com/pages/coastline-hauling-san-diego-ca/",
  },
  "junkinator": {
    nextdoor: "https://nextdoor.com/pages/junkinator-hauling-services-san-diego-ca1/",
  },
  "clean-green-hauling": {
    angi: "https://www.angi.com/companylist/us/ca/san-diego/clean-green-hauling-reviews-7936644.htm",
  },
  "fs-junk-hauling": {
    nextdoor: "https://nextdoor.com/pages/fs-junk-hauling-san-marcos-ca/",
  },
};
