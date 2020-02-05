var uniqueInOrder=function(iterable){
  let holder = [];
  let args = iterable.split("");
  let counter = 0
  let mapped = args.map((i) => {
    console.log(i)
    if(holder.length == counter){
      if(holder.length == 0){
        holder.push(i)
        counter ++
      } else {
        if(holder[counter - 1] == i){
          console.log("negative")
        }
      }
      
      console.log(holder)
    } 
    
  })
}
uniqueInOrder('abcccd')