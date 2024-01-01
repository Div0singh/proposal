let btn = document.getElementById('button');
btn.addEventListener('click', function(){
    let user_name = document.getElementById("userName").value;
    let formStauts = document.getElementById("form_name");
    formStauts.style.display = "none";
    var i = 0;
    var message =
        `Dear ${user_name} You Are My Love.....!   
        **             Now I wan't to say something special to you. 
        **              So , Please read everything carefully...!  
        ?क्या चाहूँ ❤️ रब से तुम्हें पाने के बाद,
        ** किसका करूँ इंतज़ार 🥰 तेरे आने के बाद,
        ** क्यों मोहब्बत 💝 में जान लुटा देते हैं लोग,
        ** मैंने भी यह जाना इश्क़ ❤️‍🔥 करने के बाद
                                                ? When I saw you for the first time 
        ** You seems something Special to me.  
        **                  As the days goes 
        * you get closer to me....! 
        **                        I don't know the reason why your thoughts 
        * always resonates inside my mind...!                                                
        * Everything about you is always intresting for me...!                  
        ** I am somewhat nervous Because 
        ** I haven't said these words to 
        ** anyone and I won't say to anyone in future...!                                                    
        ? I Love my Parents so much than
        ** लम्हे कुछ पुराणी लिख ✍️ दूँ,
        ** कुछ नटखटी तो कुछ शैतानी 😍 लिख दूँ
        ** इजाजत 🥹 दे के देखिये,
        ** आप दोनों पे एक कहानी ✍️ लिख दूँ  
        ** anything else in this world....!                    
        ** Now You are the only person  
        *** whom I love equally with my parents....!                                                             
        ? I Love U SweetHeart.....! |                  
        **** Give me One chance to Prove my Love ...!   
        *** Design by Divakar Rajput`;
    
    writemessage();
    
    function writemessage() {
        if (i < message.length) {
            if (message.charAt(i) == "*") {
                document.getElementById("text1").innerHTML += "</br>";
            }
            else if (message.charAt(i) == "?") {
                document.getElementById("text1").innerHTML = "";
            }
            else document.getElementById("text1").innerHTML += message.charAt(i);
            i++;
            setTimeout(writemessage, 50)
        }
    }
});
