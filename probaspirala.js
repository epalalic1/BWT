class TestoviParser {
  TestoviParser() {}
  dajTacnost (a) {
      var rez ;
      var proba;
      try {
        var proba = JSON.parse(a);
      var c = (proba.stats.passes/proba.stats.tests) *100 ;
      var n = c.toFixed(1);
      if (n == 100) {
          rez = {
              "tacnost": "100",
              "greske" : []
          }

      }
      else {
          var greske = [];
          for(var i = 0; i < proba.failures.length;i++) {
              greske.push(proba.failures[i].fullTitle);
          }
          var greske2 = JSON.stringify(greske);
          rez = {
              "tacnost": n,
              "greske" : JSON.parse(greske2)
          }
      }
      } catch (exception) {
        rez = {
          "tacnost" : 0,
          "greske" : []
        }
      }
      rez = JSON.stringify(rez);
      return JSON.parse(rez);
     // return JSON.stringify(rez);
  }
  porediRezultate (rezultat1, rezultat2) {
      var x ;
      var rez1 = JSON.parse(rezultat1);
      var rez2 = JSON.parse(rezultat2);
      var jednaki = 0;
      var rez;
      if (rez1.stats.tests == rez2.stats.tests) {
        //var greske = [];
          for (var i = 0; i < rez1.tests.length;i++ ) {
              var postoji = 0;
              for (var j = 0; j < rez2.tests.length;j++) {
                    if (rez1.tests[i].fullTitle == rez2.tests[j].fullTitle) {
                    postoji = 1;
                    }
              }
                if (postoji == 1) {
                  //greske.push(rez1.failures[i]);
                  jednaki++;
                }
        
      
          } 
          
          if (jednaki == rez1.stats.tests) {
            var greske = [];
              var rez3 = this.dajTacnost(JSON.stringify(rez2));
            
              x = rez3.tacnost;
              
              for (var i = 0;i < rez1.failures.length;i++) {
                  greske.push(rez1.failures[i].fullTitle);
              }
              var greske1 = JSON.stringify(greske);
              rez = {
                  "promjena" : x,
                  "greske" : JSON.parse(greske1)
              }
          }
      }

     if (rez1.stats.tests != rez2.stats.tests || jednaki < rez1.stats.tests) {
          var brojac1 = 0;
          var greske = [];
          for (var i = 0;i < rez1.failures.length;i++) {
              var postoji = 0;
              for (var j = 0;j < rez2.tests.length;j++) {
                  if (rez1.failures[i].fullTitle == rez2.tests[j].fullTitle) {
                      postoji = 1;
                      break;
                  }
              }
              if (postoji == 0) {
                  greske.push(rez1.failures[i].fullTitle);
                  brojac1++;
              }
          }
          console.log(brojac1);
         
          for (var i = 0; i < rez2.failures.length;i++) {
            greske.push(rez2.failures[i].fullTitle);
          }
          var prvi_dio = brojac1 + rez2.stats.failures;
          var drugi_dio = brojac1 + rez2.stats.tests;
          x  = (prvi_dio/drugi_dio)*100;
          x = x.toFixed(1);
          var greske2 = JSON.stringify(greske);
          rez =  {
              "promjena" : x,
              "greske" : JSON.parse(greske2)
          }

      }
      rez = JSON.stringify(rez);
      return JSON.parse(rez);
  }
}

module.exports = TestoviParser;




var drugi = {
"stats": {
  "suites": 2,
  "tests": 5,
  "passes": 3,
  "pending": 0,
  "failures": 2,
  "start": "2021-11-14T15:21:43.557Z",
  "end": "2021-11-14T15:21:43.679Z",
  "duration": 122
},
"tests": [
  {
    "title": "treba vratiti PI kada je prečnik kruga 2",
    "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
    "file": null,
    "duration": 10,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 24,
    "currentRetry": 0,
    "err": {
      "message": "expected 0.7853981633974483 to equal 0",
      "showDiff": true,
      "actual": "0.7853981633974483",
      "expected": "0",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 0.7853981633974483 to equal 0\n    at Context.<anonymous> (test.js:10:13)"
    }
  },
  {
    "title": "test koji se zove drugacije",
    "fullTitle": "Krug #povrsina kruga test koji se zove drugacije",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "treba vratiti 5PI kada je prečnik kruga 5",
    "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
    "file": null,
    "duration": 2,
    "currentRetry": 0,
    "err": {
      "message": "expected 15.707963267948966 to equal 12.566370614359172",
      "showDiff": true,
      "actual": "15.707963267948966",
      "expected": "12.566370614359172",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 15.707963267948966 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:18:12)"
    }
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  }
],
"pending": [],
"failures": [
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 24,
    "currentRetry": 0,
    "err": {
      "message": "expected 0.7853981633974483 to equal 0",
      "showDiff": true,
      "actual": "0.7853981633974483",
      "expected": "0",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 0.7853981633974483 to equal 0\n    at Context.<anonymous> (test.js:10:13)"
    }
  },
  {
    "title": "treba vratiti 5PI kada je prečnik kruga 5",
    "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
    "file": null,
    "duration": 2,
    "currentRetry": 0,
    "err": {
      "message": "expected 15.707963267948966 to equal 12.566370614359172",
      "showDiff": true,
      "actual": "15.707963267948966",
      "expected": "12.566370614359172",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 15.707963267948966 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:18:12)"
    }
  }
],
"passes": [
  {
    "title": "treba vratiti PI kada je prečnik kruga 2",
    "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
    "file": null,
    "duration": 10,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "test koji se zove drugacije",
    "fullTitle": "Krug #povrsina kruga test koji se zove drugacije",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  }
]
}

var padovi = {
"stats": {
  "suites": 2,
  "tests": 5,
  "passes": 0,
  "pending": 0,
  "failures": 5,
  "start": "2021-11-14T15:15:44.400Z",
  "end": "2021-11-14T15:15:44.446Z",
  "duration": 46
},
"tests": [
  {
    "title": "treba vratiti PI kada je prečnik kruga 2",
    "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
    "file": null,
    "duration": 3,
    "currentRetry": 0,
    "err": {
      "message": "expected 0 to equal 3.141592653589793",
      "showDiff": true,
      "actual": "0",
      "expected": "3.141592653589793",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 0 to equal 3.141592653589793\n    at Context.<anonymous> (test.js:6:15)"
    }
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 0.7853981633974483 to equal 0",
      "showDiff": true,
      "actual": "0.7853981633974483",
      "expected": "0",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 0.7853981633974483 to equal 0\n    at Context.<anonymous> (test.js:10:13)"
    }
  },
  {
    "title": "treba vratiti 4PI kada je prečnik kruga 4",
    "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 28.274333882308138 to equal 12.566370614359172",
      "showDiff": true,
      "actual": "28.274333882308138",
      "expected": "12.566370614359172",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 28.274333882308138 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:14:13)"
    }
  },
  {
    "title": "treba vratiti 5PI kada je prečnik kruga 5",
    "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "err": {
      "message": "expected 12.566370614359172 to equal 15.707963267948966",
      "showDiff": true,
      "actual": "12.566370614359172",
      "expected": "15.707963267948966",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 12.566370614359172 to equal 15.707963267948966\n    at Context.<anonymous> (test.js:18:12)"
    }
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "err": {
      "message": "expected 3.141592653589793 to equal 0",
      "showDiff": true,
      "actual": "3.141592653589793",
      "expected": "0",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 3.141592653589793 to equal 0\n    at Context.<anonymous> (test.js:22:12)"
    }
  }
],
"pending": [],
"failures": [
  {
    "title": "treba vratiti PI kada je prečnik kruga 2",
    "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
    "file": null,
    "duration": 3,
    "currentRetry": 0,
    "err": {
      "message": "expected 0 to equal 3.141592653589793",
      "showDiff": true,
      "actual": "0",
      "expected": "3.141592653589793",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 0 to equal 3.141592653589793\n    at Context.<anonymous> (test.js:6:15)"
    }
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 0.7853981633974483 to equal 0",
      "showDiff": true,
      "actual": "0.7853981633974483",
      "expected": "0",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 0.7853981633974483 to equal 0\n    at Context.<anonymous> (test.js:10:13)"
    }
  },
  {
    "title": "treba vratiti 4PI kada je prečnik kruga 4",
    "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 28.274333882308138 to equal 12.566370614359172",
      "showDiff": true,
      "actual": "28.274333882308138",
      "expected": "12.566370614359172",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 28.274333882308138 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:14:13)"
    }
  },
  {
    "title": "treba vratiti 5PI kada je prečnik kruga 5",
    "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "err": {
      "message": "expected 12.566370614359172 to equal 15.707963267948966",
      "showDiff": true,
      "actual": "12.566370614359172",
      "expected": "15.707963267948966",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 12.566370614359172 to equal 15.707963267948966\n    at Context.<anonymous> (test.js:18:12)"
    }
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "err": {
      "message": "expected 3.141592653589793 to equal 0",
      "showDiff": true,
      "actual": "3.141592653589793",
      "expected": "0",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 3.141592653589793 to equal 0\n    at Context.<anonymous> (test.js:22:12)"
    }
  }
],
"passes": []
}






var pada1od5  = {
"stats": {
  "suites": 2,
  "tests": 5,
  "passes": 4,
  "pending": 0,
  "failures": 1,
  "start": "2021-11-14T10:34:07.348Z",
  "end": "2021-11-14T10:34:07.398Z",
  "duration": 50
},
"tests": [
  {
    "title": "should draw 3 rows when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
    "file": null,
    "duration": 2,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "should draw 2 columns in row 2 when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
    "file": null,
    "duration": 5,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "Kada su parametri 1,1 treba biti iscrtana samo jedna čelija",
    "fullTitle": "Tabela crtaj() Kada su parametri 1,1 treba biti iscrtana samo jedna čelija",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "Kada su parametri 3,3 u drugom redu trebaju biti prikazane dvije čelije",
    "fullTitle": "Tabela crtaj() Kada su parametri 3,3 u drugom redu trebaju biti prikazane dvije čelije",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "treba vratiti PI kada je prečnik kruga 2",
    "fullTitle": "Tabela crtaj() treba vratiti PI kada je prečnik kruga 2",
    "file": null,
    "duration": 4,
    "currentRetry": 0,
    "err": {
      "message": "Broj kolona treba biti 1: expected 3 to equal 4",
      "showDiff": true,
      "actual": "3",
      "expected": "4",
      "operator": "strictEqual",
      "stack": "AssertionError: Broj kolona treba biti 1: expected 3 to equal 4\n    at Context.<anonymous> (tests.js:60:16)"
    }
  }
],
"pending": [],
"failures": [
  {
    "title": "treba vratiti PI kada je prečnik kruga 2",
    "fullTitle": "Tabela crtaj() treba vratiti PI kada je prečnik kruga 2",
    "file": null,
    "duration": 4,
    "currentRetry": 0,
    "err": {
      "message": "Broj kolona treba biti 1: expected 3 to equal 4",
      "showDiff": true,
      "actual": "3",
      "expected": "4",
      "operator": "strictEqual",
      "stack": "AssertionError: Broj kolona treba biti 1: expected 3 to equal 4\n    at Context.<anonymous> (tests.js:60:16)"
    }
  }
],
"passes": [
  {
    "title": "should draw 3 rows when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
    "file": null,
    "duration": 2,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "should draw 2 columns in row 2 when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
    "file": null,
    "duration": 5,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "Kada su parametri 1,1 treba biti iscrtana samo jedna čelija",
    "fullTitle": "Tabela crtaj() Kada su parametri 1,1 treba biti iscrtana samo jedna čelija",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "Kada su parametri 3,3 u drugom redu trebaju biti prikazane dvije čelije",
    "fullTitle": "Tabela crtaj() Kada su parametri 3,3 u drugom redu trebaju biti prikazane dvije čelije",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  }
]
}

var pada5od5 = {
"stats": {
  "suites": 2,
  "tests": 5,
  "passes": 0,
  "pending": 0,
  "failures": 5,
  "start": "2021-11-14T10:32:54.890Z",
  "end": "2021-11-14T10:32:54.937Z",
  "duration": 47
},
"tests": [
  {
    "title": "treba vratiti PI kada je prečnik kruga 2",
    "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
    "file": null,
    "duration": 15,
    "currentRetry": 0,
    "err": {
      "message": "expected 0 to equal 3.141592653589793",
      "showDiff": true,
      "actual": "0",
      "expected": "3.141592653589793",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 0 to equal 3.141592653589793\n    at Context.<anonymous> (test.js:6:15)"
    }
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 0.7853981633974483 to equal 0",
      "showDiff": true,
      "actual": "0.7853981633974483",
      "expected": "0",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 0.7853981633974483 to equal 0\n    at Context.<anonymous> (test.js:10:13)"
    }
  },
  {
    "title": "treba vratiti 4PI kada je prečnik kruga 4",
    "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 28.274333882308138 to equal 12.566370614359172",
      "showDiff": true,
      "actual": "28.274333882308138",
      "expected": "12.566370614359172",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 28.274333882308138 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:14:13)"
    }
  },
  {
    "title": "treba vratiti 5PI kada je prečnik kruga 5",
    "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 12.566370614359172 to equal 15.707963267948966",
      "showDiff": true,
      "actual": "12.566370614359172",
      "expected": "15.707963267948966",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 12.566370614359172 to equal 15.707963267948966\n    at Context.<anonymous> (test.js:18:12)"
    }
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 3.141592653589793 to equal 0",
      "showDiff": true,
      "actual": "3.141592653589793",
      "expected": "0",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 3.141592653589793 to equal 0\n    at Context.<anonymous> (test.js:22:12)"
    }
  }
],
"pending": [],
"failures": [
  {
    "title": "treba vratiti PI kada je prečnik kruga 2",
    "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
    "file": null,
    "duration": 15,
    "currentRetry": 0,
    "err": {
      "message": "expected 0 to equal 3.141592653589793",
      "showDiff": true,
      "actual": "0",
      "expected": "3.141592653589793",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 0 to equal 3.141592653589793\n    at Context.<anonymous> (test.js:6:15)"
    }
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 0.7853981633974483 to equal 0",
      "showDiff": true,
      "actual": "0.7853981633974483",
      "expected": "0",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 0.7853981633974483 to equal 0\n    at Context.<anonymous> (test.js:10:13)"
    }
  },
  {
    "title": "treba vratiti 4PI kada je prečnik kruga 4",
    "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 28.274333882308138 to equal 12.566370614359172",
      "showDiff": true,
      "actual": "28.274333882308138",
      "expected": "12.566370614359172",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 28.274333882308138 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:14:13)"
    }
  },
  {
    "title": "treba vratiti 5PI kada je prečnik kruga 5",
    "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 12.566370614359172 to equal 15.707963267948966",
      "showDiff": true,
      "actual": "12.566370614359172",
      "expected": "15.707963267948966",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 12.566370614359172 to equal 15.707963267948966\n    at Context.<anonymous> (test.js:18:12)"
    }
  },
  {
    "title": "treba vratiti 0 kada je prečnik kruga 0",
    "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "err": {
      "message": "expected 3.141592653589793 to equal 0",
      "showDiff": true,
      "actual": "3.141592653589793",
      "expected": "0",
      "operator": "strictEqual",
      "stack": "AssertionError: expected 3.141592653589793 to equal 0\n    at Context.<anonymous> (test.js:22:12)"
    }
  }
],
"passes": []
}
//console.log(proba.porediRezultate(JSON.stringify(pada5od5), JSON.stringify(pada1od5)));
//console.log(proba.porediRezultate(JSON.stringify(x),JSON.stringify(padajuSvi)));


var a  = '{"stats":{"suites":2,"tests":2,"passes":2,"pending":0,"failures":0,"start":"2021-11-05T15:00:26.343Z","end":"2021-11-05T15:00:26.352Z","duration":9},"tests":[{"title":"should draw 3 rows when parameter are 2,3","fullTitle":"Tabela crtaj() should draw 3 rows when parameter are 2,3","file":null,"duration":1,"currentRetry":0,"speed":"fast","err":{}},{"title":"should draw 2 columns in row 2 when parameter are 2,3","fullTitle":"Tabela crtaj() should draw 2 columns in row 2 when parameterare 2,3","file":null,"duration":0,"currentRetry":0,"speed":"fast","err":{}}],"pending":[],"failures":[],"passes":[{"title":"should draw 3 rows when parameter are 2,3","fullTitle":"Tabela crtaj() should draw 3 rows when parameter are 2,3","file":null,"duration":1,"currentRetry":0,"speed":"fast","err":{}},{"title":"should draw 2 columns in row 2 when parameter are 2,3","fullTitle":"Tabela crtaj() should draw 2 columns in row 2 when parameterare 2,3","file":null,"duration":0,"currentRetry":0,"speed":"fast","err":{}}]}';
var b  = '{"stats":{"suites":2,"tests":2,"passes":2,"pending":0,"failures":0,"start":"2021-11-05T15:00:26.343Z","end":"2021-11-05T15:00:26.352Z","duration":9},"tests":[{"title":"should draw 3 rows when parameter are 2,3","fullTitle":"Tabela crtaj() should draw 3 rows when parameter are 2,3","file":null,"duration":1,"currentRetry":0,"speed":"fast","err":{}},{"title":"should draw 2 columns in row 2 when parameter are 2,3","fullTitle":"Tabela crtaj() should draw 2 columns in row 2 when parameterare 2,3","file":null,"duration":0,"currentRetry":0,"speed":"fast","err":{}}],"pending":[],"failures":[],"passes":[{"title":"should draw 3 rows when parameter are 2,3","fullTitle":"Tabela crtaj() should draw 3 rows when parameter are 2,3","file":null,"duration":1,"currentRetry":0,"speed":"fast","err":{}},{"title":"should draw 2 columns in row 2 when parameter are 2,3","fullTitle":"Tabela crtaj() should draw 2 columns in row 2 when parameterare 2,3","file":null,"duration":0,"currentRetry":0,"speed":"fast","err":{}}]}';





var x = {
  "stats": {
    "suites": 2,
    "tests": 6,
    "passes": 4,
    "pending": 0,
    "failures": 2,
    "start": "2021-11-10T09:11:20.877Z",
    "end": "2021-11-10T09:11:21.110Z",
    "duration": 233
  },
  "tests": [
    {
      "title": "treba vratiti PI kada je prečnik kruga 2",
      "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 4PI kada je prečnik kruga 4",
      "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
      "file": null,
      "duration": 11,
      "currentRetry": 0,
      "err": {
        "message": "expected 12.566370614359172 to equal 9.42477796076938",
        "showDiff": true,
        "actual": "12.566370614359172",
        "expected": "9.42477796076938",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 12.566370614359172 to equal 9.42477796076938\n    at Context.<anonymous> (test.js:14:13)"
      }
    },
    {
      "title": "treba vratiti 5PI kada je prečnik kruga 5",
      "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
      "file": null,
      "duration": 18,
      "currentRetry": 0,
      "err": {
        "message": "expected 15.707963267948966 to equal 12.566370614359172",
        "showDiff": true,
        "actual": "15.707963267948966",
        "expected": "12.566370614359172",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 15.707963267948966 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:18:12)"
      }
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 3PI kada je prečnik kruga 3",
      "fullTitle": "Krug #povrsina kruga treba vratiti 3PI kada je prečnik kruga 3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ],
  "pending": [],
  "failures": [
    {
      "title": "treba vratiti 4PI kada je prečnik kruga 4",
      "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
      "file": null,
      "duration": 11,
      "currentRetry": 0,
      "err": {
        "message": "expected 12.566370614359172 to equal 9.42477796076938",
        "showDiff": true,
        "actual": "12.566370614359172",
        "expected": "9.42477796076938",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 12.566370614359172 to equal 9.42477796076938\n    at Context.<anonymous> (test.js:14:13)"
      }
    },
    {
      "title": "treba vratiti 5PI kada je prečnik kruga 5",
      "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
      "file": null,
      "duration": 18,
      "currentRetry": 0,
      "err": {
        "message": "expected 15.707963267948966 to equal 12.566370614359172",
        "showDiff": true,
        "actual": "15.707963267948966",
        "expected": "12.566370614359172",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 15.707963267948966 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:18:12)"
      }
    }
  ],
  "passes": [
    {
      "title": "treba vratiti PI kada je prečnik kruga 2",
      "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 3PI kada je prečnik kruga 3",
      "fullTitle": "Krug #povrsina kruga treba vratiti 3PI kada je prečnik kruga 3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ]
}

var proba =  new TestoviParser();

//var e  = "Ovo nije JSON format";
//console.log(proba.dajTacnost(JSON.stringify(e)));
//console.log(proba.dajTacnost(JSON.stringify(x)));
//console.log(proba.porediRezultate(JSON.stringify(x),b));
//proba.porediRezultate(a,b);

var prolaziSamoJedan = {
  "stats": {
    "suites": 2,
    "tests": 6,
    "passes": 1,
    "pending": 0,
    "failures": 5,
    "start": "2021-11-13T16:36:45.521Z",
    "end": "2021-11-13T16:36:45.565Z",
    "duration": 44
  },
  "tests": [
    {
      "title": "treba vratiti PI kada je prečnik kruga 2",
      "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 3,
      "currentRetry": 0,
      "err": {
        "message": "expected 0 to equal 1",
        "showDiff": true,
        "actual": "0",
        "expected": "1",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 0 to equal 1\n    at Context.<anonymous> (test.js:10:13)"
      }
    },
    {
      "title": "treba vratiti 4PI kada je prečnik kruga 4",
      "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "err": {
        "message": "expected 12.566370614359172 to equal 9.42477796076938",
        "showDiff": true,
        "actual": "12.566370614359172",
        "expected": "9.42477796076938",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 12.566370614359172 to equal 9.42477796076938\n    at Context.<anonymous> (test.js:14:13)"
      }
    },
    {
      "title": "treba vratiti 5PI kada je prečnik kruga 5",
      "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "err": {
        "message": "expected 15.707963267948966 to equal 12.566370614359172",
        "showDiff": true,
        "actual": "15.707963267948966",
        "expected": "12.566370614359172",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 15.707963267948966 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:18:12)"
      }
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "err": {
        "message": "expected 0 to equal 3.141592653589793",
        "showDiff": true,
        "actual": "0",
        "expected": "3.141592653589793",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 0 to equal 3.141592653589793\n    at Context.<anonymous> (test.js:22:12)"
      }
    },
    {
      "title": "treba vratiti 3PI kada je prečnik kruga 3",
      "fullTitle": "Krug #povrsina kruga treba vratiti 3PI kada je prečnik kruga 3",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "err": {
        "message": "expected 9.42477796076938 to equal 12.566370614359172",
        "showDiff": true,
        "actual": "9.42477796076938",
        "expected": "12.566370614359172",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 9.42477796076938 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:26:12)"
      }
    }
  ],
  "pending": [],
  "failures": [
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 3,
      "currentRetry": 0,
      "err": {
        "message": "expected 0 to equal 1",
        "showDiff": true,
        "actual": "0",
        "expected": "1",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 0 to equal 1\n    at Context.<anonymous> (test.js:10:13)"
      }
    },
    {
      "title": "treba vratiti 4PI kada je prečnik kruga 4",
      "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "err": {
        "message": "expected 12.566370614359172 to equal 9.42477796076938",
        "showDiff": true,
        "actual": "12.566370614359172",
        "expected": "9.42477796076938",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 12.566370614359172 to equal 9.42477796076938\n    at Context.<anonymous> (test.js:14:13)"
      }
    },
    {
      "title": "treba vratiti 5PI kada je prečnik kruga 5",
      "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "err": {
        "message": "expected 15.707963267948966 to equal 12.566370614359172",
        "showDiff": true,
        "actual": "15.707963267948966",
        "expected": "12.566370614359172",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 15.707963267948966 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:18:12)"
      }
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "err": {
        "message": "expected 0 to equal 3.141592653589793",
        "showDiff": true,
        "actual": "0",
        "expected": "3.141592653589793",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 0 to equal 3.141592653589793\n    at Context.<anonymous> (test.js:22:12)"
      }
    },
    {
      "title": "treba vratiti 3PI kada je prečnik kruga 3",
      "fullTitle": "Krug #povrsina kruga treba vratiti 3PI kada je prečnik kruga 3",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "err": {
        "message": "expected 9.42477796076938 to equal 12.566370614359172",
        "showDiff": true,
        "actual": "9.42477796076938",
        "expected": "12.566370614359172",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 9.42477796076938 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:26:12)"
      }
    }
  ],
  "passes": [
    {
      "title": "treba vratiti PI kada je prečnik kruga 2",
      "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ]
}

//console.log(proba.dajTacnost(JSON.stringify(prolaziSamoJedan)));

var padajuSvi = {
  "stats": {
    "suites": 2,
    "tests": 6,
    "passes": 0,
    "pending": 0,
    "failures": 6,
    "start": "2021-11-13T16:40:36.205Z",
    "end": "2021-11-13T16:40:36.245Z",
    "duration": 40
  },
  "tests": [
    {
      "title": "treba vratiti PI kada je prečnik kruga 2",
      "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
      "file": null,
      "duration": 4,
      "currentRetry": 0,
      "err": {
        "message": "expected 7.0685834705770345 to equal 3.141592653589793",
        "showDiff": true,
        "actual": "7.0685834705770345",
        "expected": "3.141592653589793",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 7.0685834705770345 to equal 3.141592653589793\n    at Context.<anonymous> (test.js:6:15)"
      }
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "err": {
        "message": "expected 0 to equal 1",
        "showDiff": true,
        "actual": "0",
        "expected": "1",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 0 to equal 1\n    at Context.<anonymous> (test.js:10:13)"
      }
    },
    {
      "title": "treba vratiti 4PI kada je prečnik kruga 4",
      "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "err": {
        "message": "expected 12.566370614359172 to equal 9.42477796076938",
        "showDiff": true,
        "actual": "12.566370614359172",
        "expected": "9.42477796076938",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 12.566370614359172 to equal 9.42477796076938\n    at Context.<anonymous> (test.js:14:13)"
      }
    },
    {
      "title": "treba vratiti 5PI kada je prečnik kruga 5",
      "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "err": {
        "message": "expected 15.707963267948966 to equal 12.566370614359172",
        "showDiff": true,
        "actual": "15.707963267948966",
        "expected": "12.566370614359172",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 15.707963267948966 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:18:12)"
      }
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "err": {
        "message": "expected 0 to equal 3.141592653589793",
        "showDiff": true,
        "actual": "0",
        "expected": "3.141592653589793",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 0 to equal 3.141592653589793\n    at Context.<anonymous> (test.js:22:12)"
      }
    },
    {
      "title": "treba vratiti 3PI kada je prečnik kruga 3",
      "fullTitle": "Krug #povrsina kruga treba vratiti 3PI kada je prečnik kruga 3",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "err": {
        "message": "expected 9.42477796076938 to equal 12.566370614359172",
        "showDiff": true,
        "actual": "9.42477796076938",
        "expected": "12.566370614359172",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 9.42477796076938 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:26:12)"
      }
    }
  ],
  "pending": [],
  "failures": [
    {
      "title": "treba vratiti PI kada je prečnik kruga 2",
      "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
      "file": null,
      "duration": 4,
      "currentRetry": 0,
      "err": {
        "message": "expected 7.0685834705770345 to equal 3.141592653589793",
        "showDiff": true,
        "actual": "7.0685834705770345",
        "expected": "3.141592653589793",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 7.0685834705770345 to equal 3.141592653589793\n    at Context.<anonymous> (test.js:6:15)"
      }
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "err": {
        "message": "expected 0 to equal 1",
        "showDiff": true,
        "actual": "0",
        "expected": "1",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 0 to equal 1\n    at Context.<anonymous> (test.js:10:13)"
      }
    },
    {
      "title": "treba vratiti 4PI kada je prečnik kruga 4",
      "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "err": {
        "message": "expected 12.566370614359172 to equal 9.42477796076938",
        "showDiff": true,
        "actual": "12.566370614359172",
        "expected": "9.42477796076938",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 12.566370614359172 to equal 9.42477796076938\n    at Context.<anonymous> (test.js:14:13)"
      }
    },
    {
      "title": "treba vratiti 5PI kada je prečnik kruga 5",
      "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "err": {
        "message": "expected 15.707963267948966 to equal 12.566370614359172",
        "showDiff": true,
        "actual": "15.707963267948966",
        "expected": "12.566370614359172",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 15.707963267948966 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:18:12)"
      }
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "err": {
        "message": "expected 0 to equal 3.141592653589793",
        "showDiff": true,
        "actual": "0",
        "expected": "3.141592653589793",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 0 to equal 3.141592653589793\n    at Context.<anonymous> (test.js:22:12)"
      }
    },
    {
      "title": "treba vratiti 3PI kada je prečnik kruga 3",
      "fullTitle": "Krug #povrsina kruga treba vratiti 3PI kada je prečnik kruga 3",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "err": {
        "message": "expected 9.42477796076938 to equal 12.566370614359172",
        "showDiff": true,
        "actual": "9.42477796076938",
        "expected": "12.566370614359172",
        "operator": "strictEqual",
        "stack": "AssertionError: expected 9.42477796076938 to equal 12.566370614359172\n    at Context.<anonymous> (test.js:26:12)"
      }
    }
  ],
  "passes": []
}
//console.log(proba.dajTacnost(JSON.stringify(padajuSvi)));


var prolazeSvi = {
  "stats": {
    "suites": 2,
    "tests": 6,
    "passes": 6,
    "pending": 0,
    "failures": 0,
    "start": "2021-11-13T16:43:33.748Z",
    "end": "2021-11-13T16:43:33.775Z",
    "duration": 27
  },
  "tests": [
    {
      "title": "treba vratiti PI kada je prečnik kruga 2",
      "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 4PI kada je prečnik kruga 4",
      "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 5PI kada je prečnik kruga 5",
      "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 3PI kada je prečnik kruga 3",
      "fullTitle": "Krug #povrsina kruga treba vratiti 3PI kada je prečnik kruga 3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ],
  "pending": [],
  "failures": [],
  "passes": [
    {
      "title": "treba vratiti PI kada je prečnik kruga 2",
      "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 4PI kada je prečnik kruga 4",
      "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 5PI kada je prečnik kruga 5",
      "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 3PI kada je prečnik kruga 3",
      "fullTitle": "Krug #povrsina kruga treba vratiti 3PI kada je prečnik kruga 3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ]
}

//console.log(proba.dajTacnost(JSON.stringify(prolaziSamoJedan)));
//console.log(proba.dajTacnost(JSON.stringify(x)));
//console.log(proba.porediRezultate(JSON.stringify(x),JSON.stringify(x)));
//console.log(proba.porediRezultate(JSON.stringify(prolaziSamoJedan),JSON.stringify(x)));
var nemaJednogTesta = {
  "stats": {
    "suites": 2,
    "tests": 5,
    "passes": 5,
    "pending": 0,
    "failures": 0,
    "start": "2021-11-13T17:07:31.202Z",
    "end": "2021-11-13T17:07:31.243Z",
    "duration": 41
  },
  "tests": [
    {
      "title": "treba vratiti PI kada je prečnik kruga 2",
      "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
      "file": null,
      "duration": 2,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 4PI kada je prečnik kruga 4",
      "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 5PI kada je prečnik kruga 5",
      "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ],
  "pending": [],
  "failures": [],
  "passes": [
    {
      "title": "treba vratiti PI kada je prečnik kruga 2",
      "fullTitle": "Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2",
      "file": null,
      "duration": 2,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 4PI kada je prečnik kruga 4",
      "fullTitle": "Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 5PI kada je prečnik kruga 5",
      "fullTitle": "Krug #povrsina kruga treba vratiti 5PI kada je prečnik kruga 5",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "treba vratiti 0 kada je prečnik kruga 0",
      "fullTitle": "Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ]
}
var noviTestovi = {
  "stats": {
    "suites": 2,
    "tests": 5,
    "passes": 4,
    "pending": 0,
    "failures": 1,
    "start": "2021-11-14T09:44:49.339Z",
    "end": "2021-11-14T09:44:49.383Z",
    "duration": 44
  },
  "tests": [
    {
      "title": "should draw 3 rows when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
      "file": null,
      "duration": 4,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 2 columns in row 2 when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 4,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "Kada su parametri 1,1 treba biti iscrtana samo jedna čelija",
      "fullTitle": "Tabela crtaj() Kada su parametri 1,1 treba biti iscrtana samo jedna čelija",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "Kada su parametri 3,3 u drugom redu trebaju biti prikazane dvije čelije",
      "fullTitle": "Tabela crtaj() Kada su parametri 3,3 u drugom redu trebaju biti prikazane dvije čelije",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "Kada su parametri 3,3 u trecoj koloni se treba prikazati čelija samo u posljednjem redu",
      "fullTitle": "Tabela crtaj() Kada su parametri 3,3 u trecoj koloni se treba prikazati čelija samo u posljednjem redu",
      "file": null,
      "duration": 4,
      "currentRetry": 0,
      "err": {
        "message": "Broj kolona treba biti 1: expected 3 to equal 4",
        "showDiff": true,
        "actual": "3",
        "expected": "4",
        "operator": "strictEqual",
        "stack": "AssertionError: Broj kolona treba biti 1: expected 3 to equal 4\n    at Context.<anonymous> (tests.js:60:16)"
      }
    }
  ],
  "pending": [],
  "failures": [
    {
      "title": "Kada su parametri 3,3 u trecoj koloni se treba prikazati čelija samo u posljednjem redu",
      "fullTitle": "Tabela crtaj() Kada su parametri 3,3 u trecoj koloni se treba prikazati čelija samo u posljednjem redu",
      "file": null,
      "duration": 4,
      "currentRetry": 0,
      "err": {
        "message": "Broj kolona treba biti 1: expected 3 to equal 4",
        "showDiff": true,
        "actual": "3",
        "expected": "4",
        "operator": "strictEqual",
        "stack": "AssertionError: Broj kolona treba biti 1: expected 3 to equal 4\n    at Context.<anonymous> (tests.js:60:16)"
      }
    }
  ],
  "passes": [
    {
      "title": "should draw 3 rows when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
      "file": null,
      "duration": 4,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 2 columns in row 2 when parameter are 2,3",
      "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
      "file": null,
      "duration": 4,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "Kada su parametri 1,1 treba biti iscrtana samo jedna čelija",
      "fullTitle": "Tabela crtaj() Kada su parametri 1,1 treba biti iscrtana samo jedna čelija",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "Kada su parametri 3,3 u drugom redu trebaju biti prikazane dvije čelije",
      "fullTitle": "Tabela crtaj() Kada su parametri 3,3 u drugom redu trebaju biti prikazane dvije čelije",
      "file": null,
      "duration": 1,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ]
}
var a = new TestoviParser();
// var eminav = proba.porediRezultate(JSON.stringify(nemaJednogTesta),JSON.stringify(noviTestovi));
//var eminab = JSON.parse(eminav);
//console.log(eminav.promjena);
//console.log(eminab);
//console.log( proba.porediRezultate(JSON.stringify(nemaJednogTesta),JSON.stringify(noviTestovi)));
//console.log(proba.porediRezultate(JSON.stringify(padovi), JSON.stringify(drugi)));
//console.log(JSON.stringify(proba.dajTacnost(JSON.stringify(nemaJednogTesta))));
//console.log(proba.dajTacnost(JSON.stringify(prolazeSvi)));

//var web = "{\"stats\":{\"suites\":2,\"tests\":2,\"passes\":2,\"pending\":0,\"failures\":0,\"start\":\"2021-11-05T15:00:26.343Z\",\"end\":\"2021-11-05T15:00:26.352Z\",\"duration\":9},\"tests\":[{\"title\":\"should draw 3 rows when parameterare 2,3\",\"fullTitle\":\"Tabela crtaj() should draw 3 rows when parameter are2,3\",\"file\":null,\"duration\":1,\"currentRetry\":0,\"speed\":\"fast\",\"err\":{}},{\"title\":\"should draw 2 columns in row 2 when parameter are2,3\",\"fullTitle\":\"Tabela crtaj() should draw 2 columns in row 2 when parameterare2,3\",\"file\":null,\"duration\":0,\"currentRetry\":0,\"speed\":\"fast\",\"err\":{}}],\"pending\":[],\"failures\":[],\"passes\":[{\"title\":\"should draw 3 rows whenparameter are 2,3\",\"fullTitle\":\"Tabela crtaj() should draw 3 rows when parameterare2,3\",\"file\":null,\"duration\":1,\"currentRetry\":0,\"speed\":\"fast\",\"err\":{}},{\"title\":\"should draw 2 columns in row 2 when parameter are2,3\",\"fullTitle\":\"Tabela crtaj() should draw 2 columns in row 2 when parameterare2,3\",\"file\":null,\"duration\":0,\"currentRetry\":0,\"speed\":\"fast\",\"err\":{}}]}";
//console.log(TestoviParser.dajTacnost(JSON.stringify(web)));
//console.log(a.dajTacnost(JSON.stringify(drugi)));
