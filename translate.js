function countWords() {
    var sentence = document.getElementById("sentenceInput").value;
    var option = document.getElementById("text").value;

    if(sentence===""){
        document.getElementById("wordCount").innerText = "Please enter a sentence in above textbox.";

    }else{

    switch(option){
        case "count":
            var words =  sentence.replace(" ","");
            var count = sentence.split("").filter(char => /[a-zA-Z]/.test(char)).length;
            document.getElementById("wordCount").innerText = "Letter Count: " + count;
            break;
        case "reverse":
            var rev=sentence.split('').reverse().join('');
            document.getElementById("wordCount").innerText = "Reverse order: " +rev;
            break;
        case "vowels":
            var vowelRegex = /[aeiou]/gi;
            var matches = sentence.match(vowelRegex);
            var vowels = matches ? matches.join("") : "";
               if(vowels===""){
                document.getElementById("wordCount").innerText = "There is no vowels present in given sentence.\n Please try again...";
               }else{
                document.getElementById("wordCount").innerText = "Vowels: " + vowels;
               }
                
            break;
        case "nof":
            var now = sentence.split(" ");
            document.getElementById("wordCount").innerText = "Words count: " + now.length;
           break;
        default:
        document.getElementById("wordCount").innerText = "Please select a valid operation...";
        }
    }
    
}