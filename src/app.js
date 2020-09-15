import { fetchUserInfo, fetchEducationList } from "./request";
import { getUserId } from "./path";
import "./style/index.scss";

const userId = getUserId(document.location.pathname);
if (!userId) return null;

fetchUserInfo(userId).then(({ name, age, avatar, description }) => {
  document.getElementById("avatar").src = avatar;
  document.getElementById("name").innerText = name;
  document.getElementById("age").innerText = age;
  document.getElementById("description").innerText = description;
});

fetchEducationList(userId).then((educationList) => {
  const educationsHtml = educationList
    .map(({ year, title, description }) => {
      return `<li class="education">
                <div class="education-year">${year}</div>
                <div class="education-detail">
                  <h3>${title}</h3>
                  <p>${description}</p>
                </div>
              </li>`;
    })
    .join("");
  document.getElementById("educations").innerHTML = educationsHtml;
});

return null;
