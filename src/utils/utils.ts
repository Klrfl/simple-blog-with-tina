export function slugify(input: string): string {
  return String(input)
    .trim()
    .toLowerCase()
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .split(" ", 8) // limit to 8 words, in normal cases
    .join("-")
    .replace(/[\s-]+/g, "-"); // replace multiple spaces or hyphens with a single hyphen
}
