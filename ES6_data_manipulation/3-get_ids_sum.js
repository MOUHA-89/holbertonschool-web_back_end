export default function getStudentIdsSum(students, ids) {
    if (students instanceof Array) {
        return students.reduce((student) => student.id);
    }
}
