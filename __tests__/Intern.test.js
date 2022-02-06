const Intern = require('../lib/Intern');

test("Can create School Name", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Jason", 2, "jasonamoore@frontier.com", testSchool);
    expect(employeeInstance.School).toBe(testSchool);
});

test("Testing testSchool will return School Name", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Jason", 2, "jasonamoore@frontier.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Jason", 2, "jasonamoore@frontier.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});