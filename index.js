// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};


// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


/* If an AssignmentGroup does not belong to its course (mismatching course_id),
your program should throw an error, letting the user know that the input was invalid. 
Similar data validation should occur elsewhere within the program.
*/

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
    if(AssignmentGroup.course_id !== CourseInfo.id) {
        throw new Error('Assigment Course ID does not match the course') // throw an error if ID's dont match
    }

    console.log('All good in the hood')

    for (let submission of LearnerSubmissions){
        console.log(submission.learner_id);
        console.log(submission.assignment_id);
        console.log(submission.submission.score);
    }
}


try{
getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
} catch (error) {
    console.log(error.message)
}
