export const formatDate = (dateTimeString: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = new Date(dateTimeString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };