export function addAdjacentSlugs(filteredPosts, url) {
	return filteredPosts.map((post, index) => {
		const slugPrevious =
			index > 0
				? {
						title: filteredPosts[index - 1].data.title,
						slug: `${url}/${filteredPosts[index - 1].slug}`,
					}
				: null;
		const slugNext =
			index < filteredPosts.length - 1
				? {
						title: filteredPosts[index + 1].data.title,
						slug: `${url}/${filteredPosts[index + 1].slug}`,
					}
				: null;

		return {
			...post,
			slugPrevious,
			slugNext,
		};
	});
}
