export const PHONE_DISPLAY = "(619) 245-9957";
export const PHONE_TEL = "+16192459957";
export const BUSINESS_NAME = "San Diego Junk Removal and Hauling";
export const PARENT_NAME = "Fred's Junk Removal";
export const ADDRESS_LINE = "1455 Kettner Blvd #1502";
export const ADDRESS_CITY = "San Diego, CA 92101";
export const HOURS_LINE = "Mon–Sat, 9:00 AM – 4:00 PM";
export const HOURS_NOTE = "Sunday closed. Same-day often available.";

export const DEFAULT_SMS =
  "Hi Fred — I have junk to haul in San Diego. Sending pictures for a price.";

export function smsHref(body: string = DEFAULT_SMS): string {
  return `sms:${PHONE_TEL}?&body=${encodeURIComponent(body)}`;
}

export function telHref(): string {
  return `tel:${PHONE_TEL}`;
}
