const accountId = 123456;
var accountEmail = "hello@male.com";
let accontCity = "Delhi";
accountPassword = "67890";

// accountId = 4;  --> const never be changed

console.log(accountId);

accountEmail = "hii@male.com";
accontCity = "Mumbai";
accountPassword= "987";

console.table([accountEmail, accontCity, accountPassword]);

/*
 JS m ek chota sa problem hua krta tha vo tha ki JS ko nhi pta tha ki scope kiya h, initial days pr JS scope ke basis pr kaam hi nhi krti thi, block cope naam ki ek cheez thi uss pr iska koi control hi nhi tha, kisi ek program ne accountPassword m value set kri and fir kisi aur ne kisi for condition m accountPassword m kuch changes kiye to wo pure code m change hote the, isiliye developers ne let ko introduce kra usse ye problem set hui and var ko bhi use krte h but var and const ES5 version m intoduce hui thi and let ES6 m introduce hui h but abhi bhi var, const, let working m h...
*/