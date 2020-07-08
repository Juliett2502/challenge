/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */


var name, age;
var baby, kind, teenager, erwachsene;

name = prompt ("Geben Sie Ihren Namen: ");
age = +prompt ("Geben Sie Ihr Alter: ");

baby = (age <=5);
kind = (age >=6, age <=12 );
teenager = (age >=13, age <=17);
erwachsene = (age >=18);

if (baby) 
{
    alert(name + " , wir können Ihnen Milch anbieten.");
} 
else if(kind)
{
    alert(name + " , wir können Ihnen Saft anbieten."); 
}
else if(teenager)
{
    alert(name + " , wir können Ihnen Cola anbieten."); 
}
    
else
{
        alert(name + " , wir können Ihnen Wein anbieten.");     
}