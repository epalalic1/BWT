const Sequelize=require('sequelize');
const bodyParser=require('body-parser');
const sequelize=require('./baza.js');
const express=require("express");
const app=express();
const Student = require('./Student.js')(sequelize);
const Grupa = require('./Grupa.js')(sequelize);
const Vjezba = require('./Vjezba.js')(sequelize);
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: "text/csv" }));
var path = require('path');
const { copyFileSync } = require('fs');
const TestoviParser = require('./probaspirala.js');
const { resolve } = require('path');
const { rejects } = require('assert');
app.use(bodyParser.json());
sequelize.sync();

Student.belongsTo(Grupa, { foreignKey: 'grupa', through: 'Student' });



Vjezba.belongsTo(Student, {foreignKey:'index', through: 'Vjezba'});

app.post('/student',(req, res) => {
    var a = req.body;
    a = JSON.parse(JSON.stringify(a));
    Grupa.findOne({where:{naziv:a.grupa}}).then(function(grupa){
        if (grupa == null) {
            Grupa.create({
                naziv:a.grupa
            }).then(() => {
               Student.findOne({where:{index:a.index}}).then(function(student){
                   if (student == null) {
                       Grupa.findOne({where:{naziv:a.grupa}}).then(function(grupa){
                        Student.create ({
                            ime:a.ime,prezime:a.prezime,index:a.index,grupa:grupa.id
                        }).then(() => {
                            var obj = {
                                status:"Kreiran student!"
                            }
                            res.status(200).send(obj);
                            //console.log("Student je dodan");
                        }).catch(err=>{

                        })
                       })
                   }
                   else {
                       var obj = {
                           status: "Student sa indexom {" + a.index + "} vec postoji!"
                       }
                       res.status(200).send(obj);
                   }
               })
            }).catch(err => {
            });
        }
        else {


            
             
                Student.findOne({where:{index:a.index}}).then(function(student){
                    if (student == null) {
                        Student.create ({
                            ime:a.ime,prezime:a.prezime,index:a.index,grupa:grupa.id
                        }).then(() => {
                            var obj = {
                                status:"Kreiran student!"
                            }
                            res.status(200).send(obj);
                        }).catch(err=>{
                            console.log(err);
                        })
                    }
                    else {
                        var obj = {
                            status: "Student sa indexom {" + a.index + "} vec postoji!"
                        }
                        res.status(200).send(obj);
                    }
                })
            
        }
    })
     
});
app.put('/student/:index',(req, res) => {
    var a = req.body;
    a = JSON.parse(JSON.stringify(a));
    console.log(a.grupa);
    let indeksKojiJePoslan = req.url.substr(9);
    console.log(indeksKojiJePoslan);
    Student.findOne({where:{index:indeksKojiJePoslan}}).then(function(student) {
        if (student == null) {
            var obj = {
                status: "Student sa indexom {" + a.index + "} ne postoji!"
            }
            res.status(200).send(obj);
        }
        else {
            Grupa.findOne({where:{naziv:a.grupa}}).then(function(grupa) {
                if (grupa == null) {
                    Grupa.create({
                        naziv:a.grupa
                    }).then(() => {
                       Grupa.findOne({where:{naziv:a.grupa}}).then(function(grupa2){
                        Student.update({
                            grupa:grupa2.id
                        }, { where: { index: indeksKojiJePoslan } }).then(result => {
                            var obj = {
                                status: "Promjenjena grupa studentu  {" + a.index + "}"
                            }
                            res.status(200).send(obj);
                        }).catch(err => {
                           
                        });
                       })
                    }).catch(err => {
                        return res.sendStatus(200);
                    });
                }
                else {
                    Student.update({
                        grupa:grupa.id
                    }, { where: { index: indeksKojiJePoslan } }).then(result => {
                        var obj = {
                            status: "Promjenjena grupa studentu  {" + a.index + "}"
                        }
                        res.status(200).send(obj);
                    }).catch(err => {
                       
                    });
                }
                
            })
        }
    })
    //res.sendStatus(200);
})


function pokusaj(red1) {
    var prvavar = 0;
    var drugavar = 0;
    return new Promise(function(resolve,rejects) {
        setTimeout(function () {
            Grupa.findOne({where:{naziv:red1[3]}}).then(function(grupa){
                if (grupa == null) {
                    Grupa.create({
                        naziv:red1[3]
                    }).then(() => {
                       Student.findOne({where:{index:red1[2]}}).then(function(student){
                           if (student == null) {
                               Grupa.findOne({where:{naziv:red1[3]}}).then(function(grupa){
                                Student.create ({
                                    ime:red1[0],prezime:red1[1],index:red1[2],grupa:grupa.id
                                }).then(() => {
                                   
                                    prvavar++;
                                    resolve(prvavar);
                                }).catch(err=>{
        
                                })
                               })
                           }
                           else {
                               drugavar++;
                               rejects(drugavar);
                           }
                       })
                    }).catch(err => {
                    });
                }
                else {
        
        
                    
                     
                        Student.findOne({where:{index:red1[2]}}).then(function(student){
                            if (student == null) {
                                Student.create ({
                                    ime:red1[0],prezime:red1[1],index:red1[2],grupa:grupa.id
                                }).then(() => {
                                    prvavar++;
                                    //console.log("Student je dodan");
                                    resolve(prvavar);
                                }).catch(err=>{
                                    console.log(err);
                                })
                            }
                            else {
                                drugavar++;
                                rejects(drugavar);
                               // console.log("Student vec postoji");
                            }
                        })
                    
                }
            })
                
            
        
        
        },2000)
    })
}
function prva (a) {
    return a;
}
function druga (a) {
    return a;
}

app.post('/batch/student',(req, res) => {
    var a = req.body;
    var oniKojiSuPoslani = a.toString().split("\n");
    var nizOnihKojiPostoje = [];
    var oniKojiTrebajuBitiDodani = [];
    for (var i = 0; i < oniKojiSuPoslani.length;i++) {
        var red1 = oniKojiSuPoslani[i].split(",");
        var indeks1 = red1[2];
        var prvavar = 0;
        var drugavar = 0;
        console.log(red1[3]);
         pokusaj(red1).then(prva(()=>{
            prvavar++;
            if (prvavar == 3) {
               var obj = {
                   staus:"Studenti su dodani"
               }
               res.status(200).send(obj);
            }
            
         }),druga(()=>{
            drugavar++;
            if (drugavar == 3) {
                var obj = {
                    status:"Studenti nisu dodani"
                }
                res.status(200).send(obj);
            }
            
         }));
        

    }

    //res.sendStatus(200);
})





app.post('/vjezbe',(req, res) => {
    var a = req.body;
    a = JSON.parse(JSON.stringify(a));
    Vjezba.destroy ({
        where :{},
        truncate:true
    })
    Student.findAll({attributes: ['id']}).then(function(studenti) {
        for (var  i = 0;i < studenti.length;i++) {
            var broj = a.brojVjezbi;
            for (var j = 1;j <= broj;j++) {
                Vjezba.create ({
                    index:studenti[i].id,vjezba:j,tacnost:"0%",promjena:"0%",greske:"[]",testovi:"[]"
                }).then(() => {
                    var obj = {
                        status:"Vjezbe su dodane"
                    }
                    res.status(200).send(obj);
                }).catch(err=>{
                   
                })
            }
        }
    })

})


app.post('/student/:index/vjezba/:vjezba',(req, res) => {
            
            var a = req.body;
            a = JSON.parse(JSON.stringify(a));
            var niz = req.url.toString().split("/");
            var indeksKojiJePoslan = niz[2];
            var vjezbeKojeSuPoslane = niz[4];
            
            Student.findOne({where:{index:indeksKojiJePoslan}}).then(function(student){
                if (student == null) {
                    var obj = {
                        status: "Nije moguce azuritati vjezbe"
                    }
                    res.status(200).send(obj);
                }
                else {
                    let  klasa = new TestoviParser();
                    var klasa1 = klasa.dajTacnost(JSON.stringify(a));
                    var klasa2 = klasa1.tacnost + "%";
                    Vjezba.update({
                        tacnost:klasa2
                    }, { where: { index:student.id, vjezba:vjezbeKojeSuPoslane} }).then(result => {
                        var obj = {
                            vjezba: vjezbeKojeSuPoslane,
                            tacnost:klasa2,
                            promjena:"0%",
                            greske:"[]"
                        }
                        res.status(200).send(obj);
                    }).catch(err => {
                       
                    });
                }
               

            })
           
            
})



app.listen(3000);


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
  



