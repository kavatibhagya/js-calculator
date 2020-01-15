function getHistory()
{
  return document.getElementById("history-value").innerText;
}
function printHistory()
{
   document.getElementById("history-value").innerText=num;
}
function getOutput()
{
    return document.getElementsById("output-value").innetText;
}
function printOutput()
{
    document.getElementById("output-value").innetText=num;
    if(output=="")
    {
        document.getElementsById("output-value").innetText=num;
    }
    else
    {
       document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
    
}
function getFormattedNumber()
{
    
}