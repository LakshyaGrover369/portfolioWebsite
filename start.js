
        let words=['Lets go in coders World?'];
        let count=0;
        let index=0;
        let letters="";
        let currentText="";
        (function typing(){

            // if(count===words.length){
            //     count=0;
            // }
            currentText=words[count];
            letters=currentText.slice(0,++index);
            document.getElementById('dynamicText').textContent=letters;
            if(letters.length===currentText.length){
                count++;
                index=0;
            }
            setTimeout(typing,200);
        }());