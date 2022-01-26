/*profile function */

async function details(url){

   let res = await fetch(url);

   let data = await res.json();
   console.log('data:', data)


}
export default details;


