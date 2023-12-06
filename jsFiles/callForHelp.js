const callForHelp=()=>{
    $('#helpImg').addClass("helpActive");
}
async function callForHelpToServer()
{   console.log("callForHelpToServer")
    if ($("#helpImg").hasClass("helpActive")){
    var result = await fetch('http://localhost:3001/callForHelp', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
    
    })
}}