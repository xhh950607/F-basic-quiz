import { fetchUserInfo, fetchEducationList } from "./request";
import { getUserId } from "./path";
import "./style/index.scss";

const userId = getUserId(document.location.pathname);
// TODO feedback: 可以不需要加null
if (!userId) return null;

fetchUserInfo(userId).then(({ name, age, avatar, description }) => {
  // TODO feedback：未处理数据是undefined的情况
  // TODO feedback: About me 的内容和User Info在UI上为独立的内容，建议拆成独立的模块
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
// TODO feedback：应该不用return
return null;
