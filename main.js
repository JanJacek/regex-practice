// This is App "Loger"                                                                                                              //

let btn = document.getElementById('mbtn');
let inp = document.getElementById('minp');

btn.addEventListener("click", ()=>{
    console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(inp.value));
})

// ******************************************************************************************************************************** //
//                                                                                                                                  //
//      Loger's RegEx formula explenation!                                                                                          //
//                                                                                                                                  //
//                                                                                                                                  //
//      Wyrażenia regularne to narzędzie do tworzenia szablonów ciągów znaków.                                                      //
//      Wystpuje jako rozszeżenie do wielu języków programowania, między innymi w JawaScripcie.                                     //
//                                                                                                                                  //
//      W JS można skorzystać z regexów za pomocą obiektów regex:                                                                   //
//          let reg1 = new RegExp("abc");                                                                                           //
//          let reg2 = /abc/;                                                                                                       //
//                                                                                                                                  //
//      Objekty regex mają maetody, np: dzięki test() można przyrównać argument do szablonu łańcucha.                               //
//          /abc/.test('abc') return true.                                                                                          //
//          /abc/.test('anc') return false.                                                                                         //
//                                                                                                                                  //    
//      Wyrażenie /abc/ odpowiada jedynie identycznemu ciągowi znaków : 'abc'.                                                      //
//      Do opisania bardziej złożonych i elastycznych łacuchów, trzeba zastosować specjalne znaki, będące składnią RegEx'a.         //
//      Niektóre z nich zostały wykorzystane w aplikacji Loger. Przjrzymy się im, żeby lepiej poznać podstawy wyrażeń regularnych.  //
//                                                                                                                                  //    
//      Za pomocą [] deklarujemy, że ciąg musi zawierać jeden ze znaków zawartych w nawiasie.                                       //
//          /[0123456789]/.test('1abc') return true.                                                                                //
//                                                                                                                                  //
//      Znaki które w systemie unicode znajdują się obok siebie, moża zapisać przedziałami                                          //
//          [0-9] będzie tym samym co wcześniej wspomniane [0123456789],                                                            //
//          [a-z] młymi literami alfabetu łąćińskiego,                                                                              //
//          [A-Z] dużymi litereami.                                                                                                 //
//                                                                                                                                  //
//      Bradziej popularne ciagi mają swoje skróty np:                                                                              //
//          \d = dowolna cyfra                                                                                                      //
//          \w = dowolna litera                                                                                                     //
//          \s = dowolny znak biały (Spacja tabulator, nowy wiersz itp.)                                                            //
//           . = to każdy znak oprócz nowego wiersza ( "enter" )                                                                    //
//                                                                                                                                  //
//      Jeżeli teraz spojrzymy do kodu Logera zorjenutjemy się, że input.value powinien zawirać Duże i małe litery, znaki specjalne //
//      i liczby.                                                                                                                   //
//                                                                                                                                  //
//      Krańcach wyrażenia znajdziemy zanki ^ i $ zostały on zastosowane, aby dopasowaie zaisnieło wyłcznie gdy niema nic           //
//      przed i za ciągiem.                                                                                                         //
//          ^n dopasuje dowolny ciąg znaków z n na początku                                                                         //
//          n$ dopasuje dowolny ciąg znaków z n na końcu                                                                            //
//                                                                                                                                  //
//     ?=n dopasuje dowolny ciąg po którym następuje ciąg n                                                                                                                             //
//                                                                                                                                  //
//                                                                                                                                  //
//                                                                                                                                  //
//      Bibliogrfia:
//          - Marjin Haverbeke: "Zrozummieć JavaScript"
//          - Microsoft: "https://docs.microsoft.com/en-us/powershell
//           /module/microsoft.powershell.core/about
//           /about_regular_expressions?view=powershell-7.2" - 
//          - alpha bravo: "https://stackoverflow.com/questions
//           /27976446/html-password-regular-expression-validation"