function wordcounter(){
	var input = document.getElementById('input').value;
	
    var words = 0;
	var sentences = 0;
	var spaces = 0;
    var average = 0;

    var countwords = /\w\W/g;
    var countsentences = /\w[.?!](\s|$)/g;
    
    function textstats(count){
        input.match(count).length;
    }
    
    var words = input.match(countwords).length;
	var sentences = input.match(countsentences).length;
    var average = avgwords(words,sentences);
    
    for (i = 0; i < input.length; i++) { 
     if (input[i] == ' ' ) {
         spaces++;
     };
};
    
    function avgwords (words,sentences){
        return words/sentences;
    };
   
    console.log("hello");
    

	document.getElementById("wordcount").innerHTML = (words);
	document.getElementById("sentence").innerHTML = (sentences);
	document.getElementById("avgword").innerHTML = (average);
	document.getElementById("space").innerHTML = (spaces);
    
    if(spaces > words){
        alert("Hey Mae!!!!");
    }
    
   if (words == 0){
  document.getElementById("wordcount").innerHTML = "0"};
   if (sentences == 0){
  document.getElementById("sentence").innerHTML = "0"};
   if (average == 0){
  document.getElementById("average").innerHTML = "0"};
   if (spaces == 0){
  document.getElementById("space").innerHTML = "0"};

  sentences = 0;
  spaces = 0;
  average = 0;

};