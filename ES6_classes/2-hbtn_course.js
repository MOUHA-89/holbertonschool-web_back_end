export default class HolbertonCourse {
    constructor(name, length, students) {
      this._name = name,
      this._length = length,
      this._students = students
    }
    get name() {
      return this._name;
    }

    get length() {
      return this._length;
    }

    get students() {
      return this._students;
    }

    set name(value) { {
      if(typeof value !== "String"){
        throw new TypeError("name must be an integer")
    }
    this._name = value;
  }
}

    set length(value) { 
      if (typeof value !== "number") { {
        throw new TypeError("length must be  a number" )
    }
    this._length = value;
  }
}

    set students(value) { {
      if (!Array.isArray(value) || !value.every(student => typeof student === "string")) {
        throw new TypeError("Students must be an array of strings");
        }
    }
    this._students = value;
  }
}