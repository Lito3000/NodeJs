"use strict";
(function () {
    class Student {

        constructor(firstName, lastName, birthday, lessonsCount = 25) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthday = birthday;
            this.lessonsCount = lessonsCount - 1;
            this.attendance = new Array(this.lessonsCount);
            this.grades = new Array(this.lessonsCount);

            this.lessonIndex = 0;

            this.gradesComfig = {
                minGrade: 0,
                maxGrade: 100
            }
        }

        setAttendance(isPresent = true) {
            if (this.lessonIndex > this.lessonsCount) return
            if (typeof isPresent !== "boolean") throw new Error('Student.setAttendance isPresent should be in boolean type')
            this.attendance[this.lessonIndex] = isPresent
            this.lessonIndex = this.lessonIndex + 1
        }

        present() {
            this.setAttendance(true)
        }

        absent() {
            this.setAttendance(false)
        }

        setGrade(grade) {
            const currenLessonIndex = this.lessonIndex - 1
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

        calcAvgGrade() {
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

        summary() {
            return {
                avgGrade: this.calcAvgGrade(),
                avgAttendance: this.calcAvgAttendance()
            }
        }

        calcAvgAttendance() {
            let lessonsCount = 0;
            let visitedLesson = 0;
            for (let i = 0; i < this.attendance.length; i++) {
                if (typeof this.attendance[i] !== "boolean") {
                    break
                } else {
                    lessonsCount = lessonsCount + 1
                }
                this.attendance[i] && (visitedLesson += 1)

            }
            return Number((visitedLesson / lessonsCount).toFixed(1))


        }


    }

    const student1 = new Student('Alex', 'Murov', 34)
    const student2 = new Student("Brad", 'Pitt', 58)
    const student3 = new Student("George", 'Clooney', 60)

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

    student2.present()
    student2.setGrade(40)

    student2.present()
    student2.setGrade(50)

    student2.present()
    student2.present()
    student2.present()

    student2.setGrade(29)
    console.log(student2.summary())
    console.log(student1)
    console.log(student2)
    console.log(student3)

})()