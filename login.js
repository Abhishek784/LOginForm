/*alert('javascript attached ');*/

document.querySelector('.button').addEventListener('click',function(){
    document.querySelector('.bgModal').style.display='flex';
});
document.querySelector('.close').addEventListener('click' ,function(){
    document.querySelector('.bgModal').style.display='none';
});
document.querySelector('.signIn').addEventListener('click' ,function(){
    document.querySelector('.bgModal').style.display='none';
});