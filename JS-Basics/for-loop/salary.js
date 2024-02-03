function salary(input) {

    let n = Number(input[0]);
    let salary = Number(input[1]);
    let facebook = 150;
    let instagram = 100;
    let reddit = 50;

    for(let i = 2; i <= input.length; i++) {
        let bill = input[i];

            if(bill === 'Facebook') {
                salary -= facebook;
            } else if(bill === 'Instagram') {
                salary -= instagram; 
            } else if(bill === 'Reddit') {
                salary -= reddit;
            }

        if(salary <= 0) {
            console.log("You have lost your salary.");
            return;
        }
    }

    console.log(salary);
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);