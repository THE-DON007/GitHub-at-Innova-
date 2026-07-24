// Array containing fellow profiles
let fellows = [
    {
        name: "Daniel",
        role: "Frontend Developer",
        points: 92,
        completedTasks: 8
    },
    {
        name: "Sarah",
        role: "Data Analyst",
        points: 85,
        completedTasks: 7
    },
    {
        name: "Michael",
        role: "Backend Developer",
        points: 95,
        completedTasks: 9
    }
];

// Adding a new fellow profile using push()
fellows.push({
    name: "Emily",
    role: "Cybersecurity Intern",
    points: 88,
    completedTasks: 6
});

// Looping through every fellow profile
for (let fellow of fellows) {
    console.log("===== Fellow Profile =====");
    console.log(`Name: ${fellow.name}`);
    console.log(`Role: ${fellow.role}`);
    console.log(`Points: ${fellow.points}`);
    console.log(`Tasks Completed: ${fellow.completedTasks}`);

    // Checking performance level
    if (fellow.points >= 90) {
        console.log("Status: Excellent Performer");
    } else {
        console.log("Status: Keep Improving");
    }

    console.log("==========================\n");
}