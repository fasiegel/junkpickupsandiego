export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  paragraphs: string[];
  figures?: { after: number; src: string; alt: string }[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "best-junk-removal-service-san-diego",
    title: "Finding the best junk removal service in San Diego",
    description:
      "A local collection of San Diego junk haulers, junk removal service prices you can compare, and a guide brought to you by Fred’s Junk Removal.",
    date: "October 1, 2026",
    paragraphs: [
      "Finding the best junk removal service in San Diego is easier when the list is local. This directory collects San Diego junk haulers who work here: small businesses run by the owner or the family, not out-of-town corporations that answer the phone from another state. You can see who covers your neighborhood, then compare junk removal service prices before a truck is on the way.",
      "The guide is brought to you by Fred’s Junk Removal, a local veteran-owned crew and the service this site is built around. Plenty of people in San Diego already treat Fred’s as the crew they text when a sofa, a fridge, or a garage pile has to go. He publishes household prices and asks for a picture, so the amount you accept is the amount you pay. The other listings sit beside that featured page so you can shop a wider collection of local haulers instead of a national brand.",
      "Junk removal service prices depend on the load, not on a slogan. Across the prices companies in this guide already print, a single item or a minimum pickup averages $114, from 16 published prices. A couch averages $105. A mattress averages $113. A refrigerator or a standard appliance averages $102. A hot tub averages $422. Those figures are the middle of each posted range, then the middle of those, rounded to the dollar. If a company does not print a price, it is not in the average. The average helps you judge a deal. It is not your quote.",
      "The same method covers the truck. A quarter truck averages $232. A half truck averages $386. Three-quarters of a truck averages $525. A full truck of household junk averages $694. Where a hauler also states cubic yards, the price per cubic yard averages $44. Stairs, extra weight, concrete, and yard waste can move the number. Matching the pile to a size is how junk removal service prices stay fair. A full-truck price for two chairs is not a deal. A single-item price for a packed garage is not one either.",
      "To find the best junk removal service for your street, open the neighborhood page and read who says they haul there. Then open two or three listings. Check the phone, the hours, and any junk removal service prices they posted. Text a photo to the crews that fit the job and ask them to name the price before they roll. The best junk removal service is the local one that states the price, arrives when it said it would, and takes the pile you pointed at.",
      "Fred’s Junk Removal is where this guide starts, because the directory is his and the posted prices are part of how he works. The rest of the collection is here for the same reason: local small businesses across San Diego, from the beach neighborhoods through the central city, East County, and the South Bay. Compare the average costs, then hire the hauler who actually covers your block. That is how junk removal service prices and a local list work together.",
    ],
    figures: [
      {
        after: 2,
        src: "/images/blog-item-prices.png",
        alt: "Average prices for a single item and the haulers who published them",
      },
      {
        after: 3,
        src: "/images/blog-truck-prices.png",
        alt: "Average prices for a quarter, half, three-quarter, and full truck",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}
