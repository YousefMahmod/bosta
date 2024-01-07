export const getDate = (date: string) => {
  if (new Date(date).toString() == "Invalid Date") return [null, null];
  const temp = new Date(date).toLocaleString().split(",");
  date = temp[0];
  const time = temp[1].trim();
  return [date, time];
};

export const getDay = (date: string) => {
  if (new Date(date).toString() == "Invalid Date") return null;
  return new Date(date).toString().split(" ")[0];
};

export const getSplitedDate = (date: string) => {
  const temp = new Date(date).toString().split(" ");
  const year = temp[3];
  const month = temp[1];
  const dayNo = temp[2].startsWith("0", 0) ? temp[2][1] : temp[2]; // 01 => 1 22 => 22
  return [dayNo, month, year];
};
