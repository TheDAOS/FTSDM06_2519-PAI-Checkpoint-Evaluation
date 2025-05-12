const todos = [
    { userId: 1, title: "Fix bug", completed: false },
    { userId: 2, title: "Write test", completed: true },
    { userId: 1, title: "Push code", completed: false },
    { userId: 3, title: "Design UI", completed: false }
];

const ans = todos
    .filter(task => !task.completed)
    .map(task => ({ userId: task.userId, completed: task.completed }))
    .reduce((a, task) => {
        if (a[task.userId] === undefined) {
            a[task.userId]=1;
        } else {
            a[task.userId]++;
        }

        return a;
    }, {})


console.log(ans)

/*
Use filter() to get all incomplete tasks
Use map() to extract { userId, title }
Use reduce() to get count of incomplete tasks per user
*/