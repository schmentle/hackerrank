function gradingStudents(grades) {
    const roundedGrades = [];

    for (let grade of grades) {
        if (grade < 38) {
            roundedGrades.push(grade);
        } else {
            const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

            if (nextMultipleOfFive - grade < 3) {
                roundedGrades.push(nextMultipleOfFive);
            } else {
                roundedGrades.push(grade);
            }
        }
    }

    return roundedGrades;
}
