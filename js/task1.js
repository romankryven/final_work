// Task 1 


let nameArr=[];

let occupationArr = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA',
	'Middle QA', 'Senior QA', 'Project manager'];



	function getNames(){
for( i = 0; i < occupationArr.length; i++){
	let fullName = prompt("Введіть Ім'я працівника");
	nameArr.push(fullName);
};
console.log(nameArr);
}

// Task 2

let team = {};
function createTeam(){

for(i = 0; i < occupationArr.length; i++){
	b = i + 1;
	team[b] = {
		name : nameArr[i],
		position : occupationArr[i]
	};

}
console.log(team);
}



// Task 3


function setSalary(){
	for(let key in team){
		if(team[key].position.toLowerCase().indexOf('junior') == 0){
			let a = 500;
			let c = 1000;
			team[key].salary = ((Math.random() * (c-a) + a)).toFixed(0);
		} else if (team[key].position.toLowerCase().indexOf('middle') == 0){
			let a = 1500;
			let c = 2000;
			team[key].salary = ((Math.random() * (c-a) + a)).toFixed(0);
		}else if (team[key].position.toLowerCase().indexOf('senior') == 0){
			let a = 2500;
			let c = 3000;
			team[key].salary = ((Math.random() * (c-a) + a)).toFixed(0);
		} else {
			let a = 4000;
			let c = 4500;
			team[key].salary = ((Math.random() * (c-a) + a)).toFixed(0);
		}
	}
}

getNames();
createTeam();
setSalary();


// Task 4

for(let key in team) {
	team[key].tellAboutYourSelf = function() {
		alert(`Мене звуть ${this.name} і я - ${this.position}. Я заробляю ${this.salary} $.`);
	}
}

team[1].tellAboutYourSelf();


// Task 5


team.showTeam = function() {
for(i=1; i <= nameArr.length; i++ ){
		console.log(`${this[i].name} - ${this[i].position}. Зарплата -  ${this[i].salary}$.`);
	} 
}
	
team.showTeam();