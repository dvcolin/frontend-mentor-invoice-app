export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString
    .split("-")
    .map((valString) => +valString);

  const date = new Date(Date.UTC(year, month, day));

  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};
