class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        cost = Number(cost);
        priority = Number(priority);

        if(cost > this.budget) {
            return  `Not enough budget to add '${description}' task.`
        } else {
            this.tasks.push({ description, cost, priority });
            this.budget -= cost;
            return `The task '${description}' has been successfully added to the renovation plan.`
        }
    }

    markTaskAsCompleted(description) {
        let findTask = this.tasks.find(el => el.description === description);

        if(!findTask) {
            throw new Error(`Task '${description}' not found in the renovation plan.`)
        } else {
            this.completedTasks.push(findTask);

            let idx = this.tasks.indexOf(findTask);
            this.tasks.splice(idx, 1);

            return `The task '${description}' has been successfully completed.`
        }
    }

    getPriorityTasksCount(minimalPriority) {
        minimalPriority = Number(minimalPriority);

        if(minimalPriority <= 0) {
            return  "The priority cannot be zero or negative.";
        }

        let countTasks = 0;
        for (let task of this.tasks) {
            if(task.priority >= minimalPriority) {
                countTasks++;
            }
        }

        if(countTasks > 0) {
            return `You have ${countTasks} tasks to prioritize.`
        } else {
            return `No tasks found with priority ${minimalPriority} or higher.`
        }
    }

    renovationSummary() {
        let message = [];
        if(this.completedTasks.length === 0) {
            throw new Error("No tasks have been completed yet!");
        } else {
            message.push(`Budget left $${this.budget}.`);
        }

        message.push(`You have completed ${this.completedTasks.length} tasks.`);
        message.push('Pending tasks in the renovation plan:');

        for (let task of this.tasks) {
            message.push(`${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`)
        }

        return message.join('\n')
    }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.renovationSummary());

