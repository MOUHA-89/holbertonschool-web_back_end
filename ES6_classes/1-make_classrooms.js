import Classroom from "0-classroom.js"
import ClassRoom from "./0-classroom";
export default function initializeRooms() {
  const size = [19, 20, 34];
  const ClassArray = [];
  for (const size of sizes) {
    ClassArray.push(new ClassRoom(size));
  }
  return ClassArray;
}
