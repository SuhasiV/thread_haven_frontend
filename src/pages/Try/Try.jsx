const Try = () => {
  const addSum = (nums, target) => {
    let sum = 0;
    for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
          sum = nums[i] + nums[j];
          if (sum === target) {
            console.log("[", i, ",", j, "]");
          } else {
            console.log("calculation not done");
          }
        }
      }
    }
  };

  const nums = [3, 2, 4]; // Example array
  const target = 6; // Example target

  const result = addSum(nums, target);
  if (result !== undefined) {
    console.log("Sum of two numbers:", result);
  } else {
    console.log("calculation done");
  }

  return <div>try</div>;
};

export default Try;
