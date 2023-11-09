import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/quiz/";


export function getQuiz() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}


/*import { useState } from "react";
const [data, setData] = useState([]);

export async function getQuiz() {
  const response = await fetch("/mockData.js");
  const data = await response.json();
  return data;
}
*/
// export function saveCourse(course) {
//   return fetch(baseUrl + (course.id || ""), {
//     method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(course)
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function deleteCourse(courseId) {
//   return fetch(baseUrl + courseId, { method: "DELETE" })
//     .then(handleResponse)
//     .catch(handleError);
// }
