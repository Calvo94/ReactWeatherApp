// function getTempCallBack (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('Philadelphia',function(err, temp){
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success',temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve,reject){
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success',temp);
// },function(err){
//   console.log('promise error',err);
// })


// Challenge Area
function addPromise(a,b){
  return new Promise(function(resolve,reject){
    setTimeout(function(){

      if(typeof a === 'number' && typeof b === 'number'){

        resolve(a+b);
      }
      else{
        reject('numbers are not corrects')
      }
    },1000);
  })
}


addPromise(3,2).then(function(sum){
  console.log('result',sum);
},function(err){
  console.log('error',err);
})
