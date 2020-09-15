import { getUserId } from "../path";

describe("path", () => {
  test("cannot exact userId if pathname is root", () => {
    expect(getUserId("/")).toBeNull();
  });

  test("cannot exact userId if pathname is not user resources", () => {
    expect(getUserId("/educations")).toBeNull();
  });

  test("cannot exact userId if pathname not include valid userId", () => {
    expect(getUserId("/users/")).toBeNull();
    expect(getUserId("/users/1&")).toBeNull();
  });

  test("can exact userId from right pathname", () => {
    expect(getUserId("/users/1")).toBe("1");
  });
});
