export const formatTime = (time: string) => {
  return time.replace("T", " at ").replace(".000Z", "");
};
