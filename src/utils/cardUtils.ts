const getVisibleCardCount = () => {
  const visibleCount = window.innerWidth / 240 - 1;

  if (visibleCount < 3) return 2;
  else return Math.floor(visibleCount);
};

const getRaceHorseDescription = (...args: Array<string>) => {
  return args.join("<br />");
};

export { getVisibleCardCount, getRaceHorseDescription };
