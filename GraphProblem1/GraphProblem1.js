/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  let adjList = Array.from({ length: numCourses }, () => []);
  let inDegree = Array(numCourses).fill(0);

  for (let [course, pre] of prerequisites) {
      adjList[pre].push(course);
      inDegree[course]++;
  }

  let queue = [];
  for (let i = 0; i < numCourses; i++) {
      if (inDegree[i] === 0) queue.push(i);
  }

  let courseOrder = [];

  while (queue.length > 0) {
      let course = queue.shift();
      courseOrder.push(course);

      for (let neighbor of adjList[course]) {
          inDegree[neighbor]--;
          if (inDegree[neighbor] === 0) queue.push(neighbor);
      }
  }


  return courseOrder.length === numCourses ? courseOrder : [];
}