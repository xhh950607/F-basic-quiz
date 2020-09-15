const BASE_URL = "http://localhost:8080";

const fetchUserInfo = (userId) => {
  return fetch(`${BASE_URL}/users/${userId}`).then((response) =>
    response.json()
  );
};

const fetchEducationList = (userId) => {
  return fetch(`${BASE_URL}/users/${userId}/educations`).then((response) =>
    response.json()
  );
};

export { BASE_URL, fetchUserInfo, fetchEducationList };
