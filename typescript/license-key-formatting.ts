export function licenseKeyFormatting(s: string, k: number): string {
  const oldDashesRemoved = s.replaceAll("-", "");
  const n = oldDashesRemoved.length;
  const firstGroupSize = (n % k) !== 0 ? (n % k) : k;

  const firstGroup = oldDashesRemoved.slice(0, firstGroupSize).toLocaleUpperCase();
  let remainingString = oldDashesRemoved.slice(firstGroupSize);
  const otherGroups: string[] = [];
  let currentGroup = "";

  while (remainingString.length !== 0) {
    const currentLetter = remainingString.substring(0, 1);
    remainingString = remainingString.substring(1, remainingString.length);
    currentGroup += currentLetter.toLocaleUpperCase();

    if (currentGroup.length >= k) {
      otherGroups.push(currentGroup);
      currentGroup = "";
    }
  }

  let result = [firstGroup, ...otherGroups].join("-");

  return result;
};
