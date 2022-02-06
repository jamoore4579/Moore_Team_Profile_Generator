const Engineer = require("../lib/Engineer");

test("Can create a github", () => {
    const testGithub = "jamoore4579";
    const employeeInstance = new Engineer("Jason", 2, "jasonamoore@frontier.com", testGithub);
    expect(employeeInstance.Github).toBe(testGithub);
});

test("Testing getGithub will return github", () => {
    const testGithub = "jamoore4579";
    const employeeInstance = new Engineer("Jason", 2, "jasonamoore@frontier.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
})

test("Testing Role", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Jason", 2, "jasonamoore@frontier.com", "jamoore4579");
    expect(employeeInstance.getRole()).toBe(returnValue);
})