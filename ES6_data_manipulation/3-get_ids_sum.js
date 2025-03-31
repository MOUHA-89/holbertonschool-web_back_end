export default function getStudentIdsSum(students) {
  if(students.length > 0) {
    return students.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
