exports.calculateHoursAgo = (createdAt) => {
  const diff = Math.abs(new Date() - new Date(createdAt));
  return Math.floor(diff / (1000 * 60 * 60)); // hours
};
