const Manager = require("../lib/Manager");

test("Can create an office number", () => {
    const testOfficeNumber = 43;
    const employeeInstance = new Manager("Jason", 2, "jasonamoore@froniter.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number", () => {
    const testOfficeNumber = 43;
    const employeeInstance = new Manager("Jason", 2, "jasonamoore@froniter.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Jason", 2, "jasonamoore@frontier.com", 43);
    expect(employeeInstance.getRole()).toBe(returnValue);
})