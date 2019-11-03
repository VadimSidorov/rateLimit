const expect = require('expect');
const request = require('request');


describe('test', ()=>{

    it('should be able send 10 requests with 200 and then  resive 401', (done)=>{
        let id = 'getA';
        [...Array(10)].forEach(element => {
            request('http://localhost:5000/api/'+id, (err, res, body) => {
                expect(res.statusCode).toBe(200)
            })
        });
        request('http://localhost:5000/api/' + id, (err, res, body) => {
            expect(res.statusCode).toBe(401)
        })
        done()
    });

    it('should be able send 10 requests with 200 and then resive 401 another param', (done) => {
        let id = 'getB';
        [...Array(10)].forEach(element => {
            request('http://localhost:5000/api/' + id, (err, res, body) => {
                expect(res.statusCode).toBe(200)
            })
        });
        request('http://localhost:5000/api/' + id, (err, res, body) => {
            expect(res.statusCode).toBe(401)
        })
        done()
    });
    
    it('should be able fire request successfully again in a 60 sec', (done) => {
        let id1 = 'getA'
        let id2 = 'getB'
        setTimeout(() => {
            request('http://localhost:5000/api/' + id1, (err, res, body) => {
                expect(res.statusCode).toBe(200)
            });
            request('http://localhost:5000/api/' + id2, (err, res, body) => {
                expect(res.statusCode).toBe(200)
            })
            done()
        }, 61 * 1000)
    })
    
})

