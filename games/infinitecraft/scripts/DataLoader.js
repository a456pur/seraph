function loadData() {
  fetch("package.json")
    .then((response) => response.json())
    .then((data) => {
      // Assign loaded merge rules to the mergeRules constant
      Object.assign(mergeRules, data);
      console.log(
        "Merge rules loaded:",
        mergeRules,
        `Total Mergable Elements: ${Object.keys(mergeRules).length}`
      );

      // Calculate total number of possible merges
      let totalMerges = 0;
      Object.keys(mergeRules).forEach((key) => {
        const merges = mergeRules[key];
        totalMerges += Object.keys(merges).length;
      });

      console.log("Total Merges Possible:", totalMerges);
    })
    .catch((error) => {
      console.error("Error loading merge rules:", error);
    });
}

loadData();