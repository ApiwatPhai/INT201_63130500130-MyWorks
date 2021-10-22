/*นายอภิวรรธน์ อาทิตย์เที่ยง 63130500130*/ 

//2.1

let student = {fname : "Apiwat", lname:"Atittieng", id:"63130500130"}
let courses = [{term : "1/63" ,course : ["GEN101","GEN121","INT100","INT101","INT102","INT104","LNG220"] , 
                credit : [1,3,3,3,1,3,3] , grade : [] , score : [3.5,2.5,2.5,2.5,2.5,3.5,2.5] , 
                gpa : 2.73 ,credits :0},{term : "2/63" , course : ["GEN111","INT103","INT104","INT105","INT107","INT200","LNG332"] , 
                credit: [3,3,3,1,3,1,3] , grade : [] , score : [3.5,2,3,2,2,2.5,3.5] , gpa : 2.73, credits : 0}]
console.log(student.fname + student.lname +" "+ student.id)
console.log(course[0].term +" " + courses[0].course[0] + " " + courses[0].credit[0] +" "+ course[0].grade[0])






















// let credits = 0;
// let allcredit = 0;

// //loop หาจำนวนเทอมแล้วไปloopอีกรอบเพื่อหาจำนวนcredit จากนั้นนำcreditมาบวกไว้ที่credits
// function allCredit(){
//     for(let i=0; i<courses.length; i++){
//         for(let x=0 ; x<courses[i].credit.length;i++){
//             credits = allCredit+courses[i].credit[x]
//             allcredit = allcredit+credits
//             return `credit : ${credits}`
//         }
//         return `All Credit : ${allcredit}`
//     }
// }
// //loopหาจำนวนของScoreแล้วใช้ifมาใช้
//  function grade(){
//     for(let z=0; z<courses[i].score[z].length;i++){
//         if(course[i].score[z]<50){
//             courses[i].grade[z]="F"
//         }
//         else if (course[i].score[z] <=50<55){
//             courses[i].grade[z]="D"
//         }
//         else if (course[i].score[z] <=55<60){
//             courses[i].grade[z]="D+"
//         }
//         else if (course[i].score[z] <=60<65){
//             courses[i].grade[z]="C"
//         }
//         else if (course[i].score[z] <=65<70){
//             courses[i].grade[z]="C+"
//         }
//         else if (course[i].score[z] <=70<75){
//             courses[i].grade[z]="B"
//         }else if (course[i].score[z] <=75<80){
//             courses[i].grade[z]="B+"
//         }
//         else{
//             courses[i].grade[z]="A"
//         }
//     }
//  }
 

// function gpa(){
    
// }



// function test(){
//     for(let i =0;i<)
// }



// let namesWithA = bandmembers.filter(d => {
//     if (d.indexOf('a') > 0) {               
//         return true;
//     }
// else {
//     return false
// }
// })
// $: namesWithA = bandmembers.filter(d => {
//     if (d.indexOf('a') > 0) {               
//         return true;
//     }
// else {
//     return false
// }
// })