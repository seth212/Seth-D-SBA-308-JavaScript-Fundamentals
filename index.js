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

    // console.log('Assigment course ID matches this course')

 }

// trying to group the data by learner with a for loop... so i want one object for each learner. 
let results= []

   for (let submission of LearnerSubmissions){
    let learnerID = submission.learner_id;
    let assignmentID = submission.assignment_id;
    let score = submission.submission.score;

    let learnerExists = false;

    //second type of loop
    for(let i = 0; i < results.length; i++) {
      if(results[i].id === learnerID){
        learnerExists = true;

        //  add submission data to learner
      results[i].submissions.push({
        assignmentID: assignmentID,
        score: score
      });
    }
    }

    // if learner does not exist yet.. also this is the second if statement.
    if (!learnerExists) {
      let learner = {
        id: learnerID,
        submissions: [
          {
            assignmentID: assignmentID,
            score: score
          }
        ]
      }
      results.push(learner)
    }
  
    
    
   }
   

   console.dir(results, {depth: null})

try{
getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
} catch (error) {                //catching the error object in the function
    console.log(error.message)   //error.message extracts just the message in the Error object 
}
