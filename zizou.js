function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  var plan = [
      {plan: "developer" , Date: new Date('2021-01-01T00:00:00.000+00:00')},
      {plan: "basic" , Date: new Date('2021-01-05T00:00:00.000+00:00')},
      {plan: "pro" , Date: new Date('2021-01-12T00:00:00.000+00:00')},
      {plan: "basic" , Date: new Date('2021-03-01T00:00:00.000Z')}
  ]
  let first = new Date('2021-01-01T00:00:00.000+00:00');
  let today =  new Date('2021-04-01T00:00:00.000+00:00');
  
  
  
  let exit = []
  let index = 0;
  
  while(first<today){
      let end = new Date(first);
         end = addDays(end, 29)
      exit.push({tiers: [], first: new Date(first), end: new Date(end)});
      
          for(let i = 0; i<plan.length; i++){
              if(i != plan.length-1){
                  if(plan[i].Date<=end && plan[i+1].Date>=first){
                      exit[exit.length - 1].tiers.push(plan[i].plan)
                  }
              }
              else{
                  if(plan[i].Date<=first || plan[i].Date<=end) exit[exit.length - 1].tiers.push(plan[i].plan)
              }
          }
       first = addDays(end, 1)
  }
  console.log(exit)