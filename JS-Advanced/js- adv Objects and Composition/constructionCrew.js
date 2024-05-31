function constructionCrew (worker){

    if(!worker.dizziness) {
        return worker;
    }
      
    worker.levelOfHydrated += (0.1 * worker.weight) * worker.experience;
    worker.dizziness = false;

    return worker;
}
let curWorker = constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true });

    console.log(curWorker);