import config from "@config/config.json";

export const dateFormat = (datetime: string | Date) => {
	const dateTime = new Date(datetime);

	const date = dateTime.toLocaleDateString(config.site.language, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return date;
};
