export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
const employeesList = {
  engineering: [
    'John Doe',
    'Guillaume Salva',
  ],
  // ... other departments
};

const report = createReportObject(employeesList);

console.log(report.allEmployees);
// Output: { engineering: [ 'John Doe', 'Guillaume Salva' ] }

console.log(report.getNumberOfDepartments(employeesList));
// Output: 1 (or the actual number of departments in employeesList)
