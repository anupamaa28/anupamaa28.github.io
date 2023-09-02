window.onload = function() {
    if (document.getElementById("UserTextInput")==null) {
        console.log("iss da null")
    }
    
    document.getElementById("UserTextInput").addEventListener("keypress", function (event) {
        if (event.keyCode == 13) 
        {
           GetUserMessage()    
           GetBotResponse()
        }
     });
    
}

function GetUserMessage()
{
    InputText = (document.getElementById("UserTextInput").value);
    document.getElementById("UserTextInput").value=""

    UserMessageText = "<div><p class='UserMessage'><span>" + InputText + "</span></p></div>";

    document.getElementById("ChatContainer").innerHTML+=UserMessageText;

    var chatHistory = document.getElementById('ChatContainer');
    chatHistory.scrollTop = chatHistory.scrollHeight  ;


}

KEYS=[]
function GetBotResponse()
{
    if (KEYS.includes("BotQues")) 
    {
        if (Yes.includes(InputText))
        {
            if (BotReply.BotQues[1] == "redirect")
            {
                InputText = BotReply.BotQues[2]
            }
            if (BotReply.BotQues[1] == "video")
            {
                BotResponseText = '<div class="image"><video  width="470px" controls source src=' + BotReply.BotQues[2] + "' type='video'></video></div>"
                document.getElementById("ChatContainer").innerHTML += BotResponseText;
                return
            }
        }

        if (No.includes(InputText))
        {
            BotResponseText = '<div><p class="BotMessage">' + 'Alright! I hope that was clear. Is there anything else i can help you with?' + '</p></div>'
            document.getElementById("ChatContainer").innerHTML += BotResponseText;
            return
        }
    }

    BotReply = BotResponse(InputText)
    KEYS = Object.keys(BotReply)
    console.log(KEYS)

    BotResponseText = ""

    if (KEYS.includes("answer"))
    {
        BotResponseText += '<div><p class="BotMessage">' + BotReply.answer + '</p></div>'
    }

    if (KEYS.includes("image"))
    {
        BotResponseText +=  "<div class='image'> <img src='"+ BotReply.image + "' width='470px'></div>"
    }

    if (KEYS.includes("video"))
    {
        BotResponseText += "<div class='image'><video  width='470px' controls source src='" + BotReply.video + "' type='video'></video></div>"
    }

    if (KEYS.includes("table"))
    {
        BotResponseText += "<div class='table' > <table> <tr> <th style= 'width:50%'>";
        BotResponseText +=  BotReply.table[0][0] + "</th> <th>" + BotReply.table[1][0] + "</th> </tr>" ;
        for ( let index=1; index < BotReply.table[0].length; index++)
        {
            BotResponseText += "<tr><td>" + BotReply.table[0][index] + "</td> <td>" +  BotReply.table[1][index] + "</td></tr>"
        }
        BotResponseText += "<table> <div class='table' >"
    }

    if (KEYS.includes("BotQues"))
    {
        BotResponseText += '<div><p class="BotMessage">' + BotReply.BotQues[0] + '</p></div>'
    }

    document.getElementById("ChatContainer").innerHTML += BotResponseText;

    window.scrollBy(0,0);

    // var chatHistory = document.getElementById('ChatContainer');
    // chatHistory.scrollTop = chatHistory.scrollHeight;
}






