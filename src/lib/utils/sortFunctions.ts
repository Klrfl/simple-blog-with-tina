import type { CollectionEntry, CollectionKey } from "astro:content";

// sort by date
export const sortByDate = (array: CollectionEntry<CollectionKey>[]) => {
	const sortedArray = array.sort(
		(a, b) =>
			new Date(b.data.date && b.data.date).getTime() -
			new Date(a.data.date && a.data.date).getTime()
	);
	return sortedArray;
};
