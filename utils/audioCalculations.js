

export const keyFromNumbersToString = (keyPair) => {
  const pitchClasses = [
    "C",
    "C♯/D♭",
    "D",
    "D♯/E♭",
    "E",
    "F",
    "F♯/G♭",
    "G",
    "G♯/A♭",
    "A",
    "A♯/B♭",
    "B",
  ];
  const key =
    keyPair.key >= 0 && keyPair.key <= 11
      ? pitchClasses[keyPair.key]
      : "Unknown";
  const mode = keyPair.mode === 1 ? "Major" : "Minor";

  return `${key} ${mode}`;
};

