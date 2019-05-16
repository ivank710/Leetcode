

var repeatedNTimes = function (A) {
  if (A.length === 1) return A[0];

  let set = new Set();

  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) {
      return A[i];
    } else {
      set.add(A[i]);
    }
  }
};