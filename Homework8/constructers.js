'use strcit';

const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
  };
  
  const bonuses = {
    'C++': 100,
    Rust: 150,
    default: 50,
  };
  
  const fines = {
    late: 'Late',
    idleTime: 'Idle Time',
  }

  const finesTax = {
    [fines.late]: 200,
    [fines.idleTime]: 150,
  }

  const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
  };
  
  function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;
  
    this.finishedTasks = 0;//Количество выполненых задач

    this.addTask = () => {
      this.tasks++;
    };
    //Метод upgrade должен повышать уровень спеца, условием явл. кол-во выполненых задач
    this.upgrade = () =>{
      const toMiddle = 5;
      const toSenior = 10;
      if(this.grade === grades.Senior){
        console.log('Well you don`t need upgrade because you already Senior');
      }
      else if(this.finishedTasks < toMiddle && this.finishedTasks !== 0){
        console.log(`You don't have enough. You need ${toMiddle - this.finishedTasks} more`);
      }
      else if(this.finishedTasks >= toMiddle && this.finishedTasks < toSenior){
        if(this.grade !== grades.Middle){
          this.grade = grades.Middle;
          console.log(`Congratulations, You have reached  grade of ${grades.Middle}`);
        }
        console.log(`But you also need ${toSenior - this.finishedTasks} to reach ${grades.Senior} grade`);
      }
      else if(this.finishedTasks >= toSenior){
        this.grade = grades.Senior;

        console.log(`Congratulations, You have reached  grade of ${grades.Senior} you really cool guy.`);
      }
      else{
        console.log(`Maybe you need start to work?`);
      }
    }

    // this.fine = (finePath) =>{
    //   if()
    // }
    
    this.finishTask = () => {
      if (this.tasks > 0) {
        this.tasks--;
        this.finishedTasks++;
        this.salary +=
          (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      }
    };
  }
  
  const user = new User('John', 'C++', grades.Junior);
  const user1 = new User('Vasya', 'Rust', grades.Senior);
  const user2 = new User('Nifertiti', 'Bu', grades.Middle);
  
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  
  
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  
  user.upgrade();

  user.fine(fines.late);
  console.log(user)