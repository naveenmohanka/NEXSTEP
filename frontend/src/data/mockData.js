/**
 * NEXSTEP - AI Learning Navigator Mock Data
 * Comprehensive mock data layer simulating adaptive AI learning states,
 * diagnostic assessments, dynamic roadmaps, practice drills, and exam readiness.
 */

export const INITIAL_USER = {
  id: 'usr_nexstep_01',
  name: 'Alex Rivera',
  email: 'alex.rivera@example.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
  targetExam: 'Top Tech SDE / Algorithms & System Design',
  targetDate: '2026-11-15',
  dailyGoalMinutes: 45,
  streakDays: 6,
  overallMastery: 68,
  readinessScore: 74,
  estimatedStudyHoursLeft: 38,
  confidenceLevel: 'Intermediate',
  currentRank: 'Top 12%',
};

export const ONBOARDING_GOALS = [
  {
    id: 'sde_interview',
    title: 'Data Structures & Algorithms (SDE Interviews)',
    description: 'Master binary trees, dynamic programming, graph theory, and system design patterns.',
    icon: 'Code2',
    topicCount: 48,
    recommendedFor: 'Career Transitions & Big Tech Prep',
    timeline: '8-12 weeks',
  },
  {
    id: 'gate_cs',
    title: 'GATE Computer Science & IT',
    description: 'Deep rigor in Operating Systems, DBMS, Algorithms, Theory of Computation & Networks.',
    icon: 'Cpu',
    topicCount: 64,
    recommendedFor: 'Graduate Admissions & Public Sector Engineering',
    timeline: '16-24 weeks',
  },
  {
    id: 'system_design',
    title: 'Modern Distributed Systems & Cloud',
    description: 'Scale architectures, microservices, consensus protocols, and real-time streaming.',
    icon: 'Layers',
    topicCount: 32,
    recommendedFor: 'Senior & Staff Engineering Tracks',
    timeline: '6-8 weeks',
  },
];

export const DIAGNOSTIC_QUESTIONS = [
  {
    id: 'diag_1',
    category: 'Trees & Graph Traversal',
    difficulty: 'Medium',
    question: 'Given a Binary Search Tree, which traversal order visits the nodes in strictly ascending numerical order?',
    codeSnippet: `// Example BST:
//     4
//    / \\
//   2   6
//  / \\
// 1   3`,
    whyWeAsk: 'Tests fundamental tree recursion invariants required for balanced search architectures.',
    options: [
      { id: 'a', text: 'Pre-order traversal (Node -> Left -> Right)' },
      { id: 'b', text: 'In-order traversal (Left -> Node -> Right)', isCorrect: true },
      { id: 'c', text: 'Post-order traversal (Left -> Right -> Node)' },
      { id: 'd', text: 'Breadth-First Level-order traversal' },
    ],
    misconceptions: {
      a: 'Pre-order visits the root first, which does not sort keys in a BST.',
      c: 'Post-order visits leaves before parents, giving descending or bottom-up order.',
      d: 'Level-order sorts by depth, not by key values.',
    },
  },
  {
    id: 'diag_2',
    category: 'Dynamic Programming & Memoization',
    difficulty: 'Medium-Hard',
    question: 'What is the optimal space complexity for calculating the N-th Fibonacci number using bottom-up tabulation when only the N-th value is required?',
    codeSnippet: `function fib(n) {
  // We only require the previous two numbers
  let prev2 = 0, prev1 = 1;
  for (let i = 2; i <= n; i++) {
    let curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`,
    whyWeAsk: 'Evaluates your ability to optimize state recurrence beyond naive O(N) memory allocation.',
    options: [
      { id: 'a', text: 'O(N) auxiliary space' },
      { id: 'b', text: 'O(log N) matrix exponentiation space' },
      { id: 'c', text: 'O(1) constant auxiliary space', isCorrect: true },
      { id: 'd', text: 'O(N^2) state memoization space' },
    ],
    misconceptions: {
      a: 'Common trap: using a full DP array of size N when only two states are needed.',
      b: 'Matrix exponentiation takes O(log N) time, but constant or small matrix space.',
      d: 'Overcomplicating the 1D state transition.',
    },
  },
  {
    id: 'diag_3',
    category: 'Complexity & Asymptotics',
    difficulty: 'Medium',
    question: 'What is the average and worst-case time complexity of searching for an element in an unsorted Hash Table with collision handling via chaining?',
    codeSnippet: `// Hash Table Lookup:
const index = hash(key) % capacity;
const node = bucket[index].find(k => k === key);`,
    whyWeAsk: 'Differentiates theoretical asymptotic bounds from practical hash distribution hazards.',
    options: [
      { id: 'a', text: 'Average O(1), Worst O(log N)' },
      { id: 'b', text: 'Average O(1), Worst O(N)', isCorrect: true },
      { id: 'c', text: 'Average O(log N), Worst O(N)' },
      { id: 'd', text: 'Average O(1), Worst O(1)' },
    ],
    misconceptions: {
      a: 'Chaining with standard linked lists degrades to O(N), not O(log N) unless treeified like Java 8 HashMap.',
      c: 'Hash lookup does not divide-and-conquer in the average case.',
      d: 'Ignores total hash collision pathological cases.',
    },
  },
  {
    id: 'diag_4',
    category: 'Graph Algorithms & Cycle Detection',
    difficulty: 'Hard',
    question: 'In a Directed Acyclic Graph (DAG), which algorithm produces a valid linear ordering where every directed edge u -> v has u appearing before v?',
    codeSnippet: `// Vertices: [A, B, C]
// Edges: A -> B, B -> C
// Valid Order: [A, B, C]`,
    whyWeAsk: 'Verifies mastery of dependency resolution required for build systems, compilers, and task schedulers.',
    options: [
      { id: 'a', text: "Kruskal's Minimum Spanning Tree" },
      { id: 'b', text: "Topological Sort (Kahn's or DFS with Post-order reverse)", isCorrect: true },
      { id: 'c', text: "Dijkstra's Shortest Path" },
      { id: 'd', text: "Floyd-Warshall All-Pairs" },
    ],
    misconceptions: {
      a: "Kruskal's finds MST on undirected weighted graphs.",
      c: "Dijkstra calculates shortest distance from a source.",
      d: 'Floyd-Warshall is all-pairs shortest paths, not dependency ordering.',
    },
  },
];

export const INITIAL_ASSESSMENT_RESULT = {
  score: 75,
  correctCount: 3,
  totalQuestions: 4,
  timeTaken: '3m 42s',
  cognitiveSummary: 'Strong intuition for asymptotic reasoning and hashing. Primary vulnerability detected in cycle invariants and multi-variable recurrence memoization.',
  readinessTier: 'Tier-1 Candidate Track (Top 18%)',
  strengths: [
    { topic: 'Hash Tables & Amortized Analysis', score: 92, status: 'Mastered' },
    { topic: 'Binary Search Tree Traversals', score: 86, status: 'Strong' },
  ],
  gaps: [
    { topic: 'Dynamic Programming State Reduction', score: 54, status: 'Needs Review', priority: 'High' },
    { topic: 'Directed Graph Dependency Cycles', score: 48, status: 'Critical Gap', priority: 'Urgent' },
  ],
  aiInsight: 'NEXSTEP detected a mental model mismatch: you know how to build recursive solutions, but you frequently allocate redundant state buffers. Your personalized roadmap has been recalibrated to compress memory-transition techniques first.',
};

export const ROADMAP_NODES = [
  {
    id: 'node-1',
    title: 'Foundations of Tree Invariants',
    category: 'Data Structures',
    status: 'completed',
    mastery: 100,
    estimatedMinutes: 25,
    whyThisStep: 'Essential basis for all hierarchical indexing in databases and search engines.',
    prerequisites: [],
    badge: 'Core Foundation',
    difficulty: 'Easy',
  },
  {
    id: 'node-2',
    title: 'DFS & Tree Traversal Recursion',
    category: 'Algorithms',
    status: 'in_progress',
    mastery: 65,
    estimatedMinutes: 35,
    whyThisStep: 'Direct prerequisite to mastering backtracking, graph search, and tree DP.',
    prerequisites: ['node-1'],
    badge: 'Recommended Next',
    difficulty: 'Medium',
    currentFocus: true,
  },
  {
    id: 'node-3',
    title: 'Space-Optimized Dynamic Programming',
    category: 'Optimization',
    status: 'locked',
    mastery: 0,
    estimatedMinutes: 50,
    whyThisStep: 'Identified as a Critical Gap in your diagnostic. Resolves memory bottlenecks.',
    prerequisites: ['node-2'],
    badge: 'Adaptive Target',
    difficulty: 'Hard',
  },
  {
    id: 'node-4',
    title: 'Topological Sort & Dependency Resolution',
    category: 'Graph Theory',
    status: 'locked',
    mastery: 0,
    estimatedMinutes: 40,
    whyThisStep: 'Cures cycle-detection blind spot identified during your diagnostic assessment.',
    prerequisites: ['node-3'],
    badge: 'Exam High Yield',
    difficulty: 'Hard',
  },
  {
    id: 'node-5',
    title: 'Advanced System Trie & Interval Scheduling',
    category: 'Advanced Patterns',
    status: 'locked',
    mastery: 0,
    estimatedMinutes: 60,
    whyThisStep: 'Cap-stone pattern frequently encountered in senior-tier technical interviews.',
    prerequisites: ['node-4'],
    badge: 'Mastery Capstone',
    difficulty: 'Expert',
  },
];

export const TOPIC_CONTENT = {
  id: 'node-2',
  title: 'DFS & Tree Traversal Recursion',
  module: 'Algorithms & Data Structures / Module 2',
  breadcrumbs: ['Data Structures', 'Trees', 'Depth-First Search (DFS)'],
  estimatedTime: '30 mins',
  difficulty: 'Medium',
  coreQuestion: 'How does the recursion call stack model implicit tree state traversal?',
  whyItMatters:
    'Every binary tree query (validation, diameter, lowest common ancestor) relies on visiting subtrees in a mathematically predictable order. Mastering this unlocks 65% of LeetCode Medium tree challenges.',
  keyConcepts: [
    {
      title: 'Call Stack as Implicit Memory',
      explanation: 'Rather than maintaining an explicit stack datastructure, recursive functions push stack frames containing parameters and local variables automatically. Max call depth equals tree height.',
    },
    {
      title: 'The Three Canonical Orders',
      explanation: 'Pre-order (Root-Left-Right) for cloning/serialization; In-order (Left-Root-Right) for sorted BST ordering; Post-order (Left-Right-Root) for bottom-up metric aggregation like tree height.',
    },
    {
      title: 'Base Case Safety & Guard Clauses',
      explanation: 'Always terminate immediately on null/empty leaf pointers (`if (!root) return null;`) before reading `root.left` or `root.right` to avoid fatal null pointer dereferences.',
    },
  ],
  codeExample: `// Post-Order Maximum Depth Evaluation
function maxDepth(root) {
  // Base Case: empty node contributes 0 height
  if (!root) return 0;

  // Recurse left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return max depth among children + 1 for current root
  return Math.max(leftDepth, rightDepth) + 1;
}`,
  commonPitfalls: [
    'Forgetting the base case leading to Maximum Call Stack Exceeded error.',
    'Confusing In-order (sorted BST) with Pre-order during search validation.',
    'Passing mutated global arrays instead of returning immutable aggregates from sub-calls.',
  ],
};

export const PRACTICE_QUESTIONS = [
  {
    id: 'prac-1',
    topicId: 'node-2',
    title: 'Validate Binary Search Tree Invariant',
    difficulty: 'Medium',
    prompt: 'You are writing an algorithm to determine if a given binary tree is a valid Binary Search Tree (BST). Why is merely checking `node.left.val < node.val && node.right.val > node.val` at each individual node insufficient?',
    codeSnippet: `// Problematic Local Check:
function checkNode(node) {
  if (!node) return true;
  if (node.left && node.left.val >= node.val) return false;
  if (node.right && node.right.val <= node.val) return false;
  return checkNode(node.left) && checkNode(node.right);
}`,
    options: [
      {
        id: 'opt-a',
        text: 'It fails because a node in the right subtree might have a value smaller than a distant ancestor root.',
        isCorrect: true,
      },
      {
        id: 'opt-b',
        text: 'It fails because binary trees cannot be traversed using recursion without an external queue.',
        isCorrect: false,
        trapType: 'Architectural misconception',
      },
      {
        id: 'opt-c',
        text: 'It works properly for all binary trees as long as there are no duplicate keys.',
        isCorrect: false,
        trapType: 'Local vs Global invariant blind spot',
      },
      {
        id: 'opt-d',
        text: 'It fails only when the tree height is an odd number.',
        isCorrect: false,
        trapType: 'Random correlation fallacy',
      },
    ],
    aiAdaptiveExplanation: {
      triggerOption: 'opt-c',
      misconceptionDetected: 'Local Property Fallacy (Confusing local child validity with global subtree bounds)',
      cognitiveDiagnosis: 'You inspected only immediate parent-child pairs. In a BST, EVERY node in the left subtree must be strictly less than the root, and EVERY node in the right subtree must be strictly greater than the root.',
      counterExample: `Counter-Example Tree:
       10
      /  \\
     5    15
         /  \\
        6    20
  
Here 6 is correctly smaller than 15, BUT 6 is in the right subtree of 10!
Since 6 < 10, this violates the global BST invariant despite passing local checks.`,
      alternativeMentalModel: 'Think of valid BST traversal as carrying a shrinking valid range `(minBound, maxBound)`. As you move left, update `maxBound = node.val`. As you move right, update `minBound = node.val`.',
      remedyCode: `function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBST(root.left, min, root.val) && 
         isValidBST(root.right, root.val, max);
}`,
    },
  },
  {
    id: 'prac-2',
    topicId: 'node-2',
    title: 'Invert Binary Tree Space Complexity',
    difficulty: 'Easy',
    prompt: 'When inverting a completely balanced binary tree with N nodes using standard depth-first recursion, what is the maximum auxiliary space occupied on the runtime call stack?',
    codeSnippet: `function invertTree(root) {
  if (!root) return null;
  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
}`,
    options: [
      { id: 'opt-a', text: 'O(log N) space proportional to tree height', isCorrect: true },
      { id: 'opt-b', text: 'O(N) space regardless of balance', isCorrect: false },
      { id: 'opt-c', text: 'O(1) auxiliary space because pointers are swapped in place', isCorrect: false },
      { id: 'opt-d', text: 'O(N^2) space due to recursion branching', isCorrect: false },
    ],
    aiAdaptiveExplanation: {
      triggerOption: 'opt-c',
      misconceptionDetected: 'Invisible Memory Overhead (Ignoring execution call-stack memory)',
      cognitiveDiagnosis: 'Even though you mutate pointers without allocating new heap objects, each recursive function invocation creates an active stack frame in memory.',
      counterExample: 'For a tree of depth H, there are H simultaneous stack frames waiting for sub-calls to finish before returning.',
      alternativeMentalModel: 'Picture the call stack like a stack of plates. You cannot wash a plate until you set down the plates stacked on top of it. Height of plates = log2(N) in a balanced tree.',
      remedyCode: '// In a balanced tree: Height H = log2(N)\n// In a skewed degenerate tree (like a linked list): H = N',
    },
  },
];

export const EXAM_INTELLIGENCE_METRICS = {
  predictedScore: '82 / 100',
  percentile: '88th Percentile',
  estimatedDaysToPeak: 14,
  highYieldTopics: [
    { name: 'Binary Trees & Traversals', examWeight: '18%', studentMastery: 78, yieldScore: 'High Yield', status: 'In Progress' },
    { name: 'Dynamic Programming Memoization', examWeight: '22%', studentMastery: 54, yieldScore: 'Critical Focus', status: 'Urgent Action' },
    { name: 'Graph Theory & Topological Sort', examWeight: '15%', studentMastery: 48, yieldScore: 'Critical Focus', status: 'Next Up' },
    { name: 'Hashing & HashMaps', examWeight: '14%', studentMastery: 92, yieldScore: 'Safe', status: 'Mastered' },
    { name: 'Greedy Intervals & Sorting', examWeight: '12%', studentMastery: 84, yieldScore: 'Safe', status: 'Strong' },
  ],
  retentionDecayCurve: [
    { day: 'Day 1', retention: 100 },
    { day: 'Day 3', retention: 88 },
    { day: 'Day 7', retention: 76 },
    { day: 'Day 14 (Review Needed)', retention: 64 },
    { day: 'Day 30', retention: 52 },
  ],
  recentMisconceptions: [
    {
      topic: 'Binary Search Tree Global Invariant',
      date: 'Today',
      severity: 'Medium',
      aiResolution: 'Prescribed range bounds `(min, max)` pattern.',
      status: 'Resolved in Practice',
    },
    {
      topic: 'Call Stack vs Heap Memory in Tree Inversion',
      date: 'Today',
      severity: 'Low',
      aiResolution: 'Clarified O(H) recursion memory vs O(1) heap allocation.',
      status: 'Resolved in Practice',
    },
  ],
};

