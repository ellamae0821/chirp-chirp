function chirp(n){

  if (n === 0){
    return '' ;
  }else{
    return "chirp " + chirp(n-1);
  }
}

chirp(3);



$(document).ready(function(){
  $("#result").html(chirp(3));
});
/*
Array(n+1).join("a")*/