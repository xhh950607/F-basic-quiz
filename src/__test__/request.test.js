import fetchMock from "fetch-mock";
import { BASE_URL, fetchUserInfo, fetchEducationList } from "../request";

describe("request", () => {
  const userInfo = {
    id: 1,
    name: "NAME",
    age: 24,
    avatar: "avatar",
    description: "description",
  };

  const educationList = [
    {
      userId: 1,
      year: 1990,
      title: "title 1",
      description: "description 1",
    },
    {
      userId: 2,
      year: 2020,
      title: "title 2",
      description: "description 2",
    },
  ];

  // TODO feedback:这个mock可以分开放到相应的测试用例里
  fetchMock
    .get(`${BASE_URL}/users/1`, userInfo)
    .get(`${BASE_URL}/users/1/educations`, educationList);

  test("fetch userinfo", () => {
    return expect(fetchUserInfo(1)).resolves.toEqual(userInfo);
  });

  test("fetch education list", () => {
    return expect(fetchEducationList(1)).resolves.toEqual(educationList);
  });
});
