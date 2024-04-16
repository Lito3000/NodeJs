const Student = function (firstName, lastName, birthday, lessonsCount = 25) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.lessonsCount = lessonsCount - 1;
    this.attendance = new Array(this.lessonsCount);
    this.grades = new Array(this.lessonsCount);

    let lessonIndex = 0;

    Student.prototype.gradesComfig = {
        minGrade: 0,
        maxGrade: 100
    }

    Student.prototype.setAttendance = function (isPresent = true) {
        if (lessonIndex > this.lessonsCount) return
        if (typeof isPresent !== "boolean") throw new Error('Student.setAttendance isPresent should be in boolean type')
        this.attendance[lessonIndex] = isPresent
        lessonIndex = lessonIndex + 1
    }
    Student.prototype.present = function () {
        this.setAttendance(true)
    }
    Student.prototype.absent = function () {
        this.setAttendance(false)
    }
    Student.prototype.setGrade = function (grade) {
        const currenLessonIndex = lessonIndex - 1
        if (currenLessonIndex > this.lessonsCount) return
        if (!this.attendance[currenLessonIndex]) {
            throw new Error('You cannot set grade for this lesson index' + currenLessonIndex)
        }
        if (grade >= this.gradesComfig.minGrade && grade <= this.gradesComfig.maxGrade) {
            this.grades[currenLessonIndex] = grade
        } else {
            throw new Error('grade is to big')
        }
    }
    Student.prototype.calcAvgGrade = function () {
        const gradeStatistic = this.grades.reduce((acc, item) => {
            acc.lessonsCountWithGrade = acc.lessonsCountWithGrade + 1;
            acc.gradeSummary = acc.gradeSummary + item
            return acc;
        }, {
            lessonsCountWithGrade: 0,
            gradeSummary: 0,
        })
        return Math.floor(gradeStatistic.gradeSummary / gradeStatistic.lessonsCountWithGrade)
    }
    Student.prototype.summary = function () {
        return {
            avgGrade: this.calcAvgGrade(),
            avgAttendance: this.calcAvgAttendance()
        }
    }
    Student.prototype.calcAvgAttendance = function () {
        let lessonsCount = 0;
        let visitedLesson = 0;
        for (let i = 0; i < this.attendance.length; i++) {
            if (typeof this.attendance[i] !== "boolean") {
                break
            } else {
                lessonsCount = lessonsCount + 1
            }
            this.attendance[i] && (visitedLesson += 1)
            // if(this.attendance[i]) {
            //     visitedLesson = visitedLesson + 1;
            // }else {
            //     lessonsCount = lessonsCount + 1
            // }
        }
        return Number((visitedLesson / lessonsCount).toFixed(1))

        // let lessonsCout2 = this.attendance.filter(item => typeof item === "boolean").length
        // console.log(lessonsCout2)

    }
}

const student1 = new Student('Alex', 'Murov', 34)


// try {

// }catch (e){
//     console.dir(e)
// }


// for (let i = 0; i < 9; i++) {
//     student1.present()
//     student1.setGrade(100)
// }
student1.present()
student1.setGrade(100)

student1.absent()
student1.absent()

student1.present()
student1.setGrade(90)

student1.present()
student1.present()
student1.present()

student1.setGrade(80)

let r = student1.summary()
console.log(r)

console.log(student1)