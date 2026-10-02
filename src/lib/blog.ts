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
    slug: "names-on-the-trucks-at-miramar",
    title: "The names on the trucks at the Miramar landfill",
    description:
      "How a customer who has never hired a hauler can find a local San Diego junk removal business that is reputable, reasonably priced, and able to do the job.",
    date: "October 2, 2026",
    paragraphs: [
      "Every time I go to the Miramar landfill I see a new junk removal business. A truck I have not seen before pulls onto the scale, lettered with a name and a phone number. Some of those crews started last month. Some have been hauling for years and I am only just meeting them. San Diego keeps making room for people who want to be their own boss, and this trade is one place a hard worker can make a good living. I do the same work.",
      "The hard question is not at the landfill. It is at the house. A customer who has never used a junk removal service still has to choose a hauler who is reputable, reasonably priced, and able to handle the task at hand. A fresh wrap on the door does not prove any of those three. A low phone quote fails the same test if the truck is too small or the bill changes after the junk is already loaded.",
      "When I see the new guys I try to remember the names on their trucks. That habit became this list. I wrote the names down, checked which companies are actually working in San Diego, and put the local ones in one place. Open a listing and you get the phone, the photos, and the neighborhoods they say they cover. Published junk removal service prices are on the prices page so you can compare them before anyone drives to you. You can also sort by Google reviews, Yelp reviews, a single-item price, price per cubic yard, years in business, and North County.",
      "The list is local businesses only. There are no out-of-state corporations and no franchise haulers. A national brand can buy an ad in every ZIP code and still answer from a desk that has never seen your alley. A local owner answers his own phone, knows which dump will take the load, and has to live with the review he earns on your street. The money stays with the person who did the work. If something is wrong, you call the same name that was painted on the door.",
      "If you have never hired a hauler, start with the job, then open your neighborhood and see who says they haul there. Read the reviews, then read any price they printed and set it next to the averages. A newer name can still be the right call when the reviews are real and the price is clear. Text a picture. Ask what the price includes, whether they can take the item from where it sits, and when they can arrive. A reputable hauler will tell you before he rolls.",
      "I still stop at Miramar, and I still see names that are not on the list yet. When a local company is real, it belongs here. The point is not to crown one winner. The point is to give you the names from the trucks, with enough in one place to choose a hauler who is reputable, reasonably priced, and able to do the job.",
    ],
  },
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
