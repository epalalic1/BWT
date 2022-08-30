let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const express = require('express');
const app = express();
chai.should();
var expect = chai.expect;
let server  = require('./zaTestove.js');

describe('testiranje post zahtjeva na /student', function () {
 
    it('Student ne postoji', (done)=> {
    let osoba = {
            ime:'emina',
            prezime: 'palalic',
            index: 'eminapalalic',
            grupa: 'pa'
    }
    chai.request(server)
        .post('/student')
        .set('content-type','application/x-www-form-urlencoded')
        .send(osoba)
        .end(function (err, res) {
        res.should.have.status(200);
    done();
});
   
    });
    it('Student postoji', function (done) {
        let osoba = {
                ime:'emina',
                prezime: 'palalic',
                index: 'eminapalalic',
                grupa: 'pa'
        }
        chai.request(server)
            .post('/student')
            .set('content-type','application/x-www-form-urlencoded')
            .send(osoba)
            .end(function (err, res) {
            res.should.have.status(200);
        done();
    });
       
        });
       
  
})
describe('testiranje put  zahtjeva na /student:index', function () {
       
        it('Mijenjamo grupu studentu koji postoji', function (done) {
                    let grupa = {
                        grupa: 'drugaGrupa'
                    }
           
                    chai.request(server)
                        .put('/student/:eminapalalic')
                        .set('content-type', 'application/x-www-form-urlencoded')
                        .send(grupa)
                        .end(function (err, res) {
                            res.should.have.status(200);
                            done();
                        });
                });
            it('Mijenjamo grupu studentu koji ne postoji', function (done) {
                        let grupa = {
                            grupa: 'drugaGrupa'
                        }
               
                        chai.request(server)
                            .put('/student/:nemaindeksa')
                            .set('content-type', 'application/x-www-form-urlencoded')
                            .send(grupa)
                            .end(function (err, res) {
                                res.should.have.status(200);
                                done();
                            });
                    });
  
})
describe('testiranje post zahtjeva na /student', function () {
 
    it('Svi su dodani', (done)=> {
    let studenti = "e,e,e,e" + "\n" + "p,p,p,p";
    chai.request(server)
        .post('/batch/student')
        .set('content-type','application/x-www-form-urlencoded')
        .send(studenti)
        .end(function (err, res) {
        res.should.have.status(200);
    done();
});
   
    });
  
  
})



