class BinaryIndexedTree {
    constructor(n) {
      this.n = n;
      this.c = Array(n + 1).fill(0);
    }
  
    static lowbit(x) {
      return x & -x;
    }
  
    update(x, delta) {
      while (x <= this.n) {
        this.c[x] += delta;
        x += BinaryIndexedTree.lowbit(x);
      }
    }
  
    query(x) {
      let s = 0;
      while (x > 0) {
        s += this.c[x];
        x -= BinaryIndexedTree.lowbit(x);
      }
      return s;
    }
  }
  
  function goodTriplets(nums1, nums2) {
    const n = nums1.length;
    const pos = new Map();
    nums2.forEach((v, i) => pos.set(v, i + 1)); // Using 1-based indexing
  
    const tree = new BinaryIndexedTree(n);
    let ans = 0;
  
    for (const num of nums1) {
      const p = pos.get(num); // position in nums2 (1-based)
      const left = tree.query(p);
      const total = tree.query(n);
      const right = n - p - (total - left);
      ans += left * right;
      tree.update(p, 1);
    }
  
    return ans;
  }
  