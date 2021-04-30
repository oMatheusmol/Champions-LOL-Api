/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const { assert } = require('chai');
const supertest = require('supertest');
const nock = require('nock');
const index = require('../src/index');

describe('Testes:', () => {
  it('Post Lucian', (done) => {
    nock('https://mt-node-stock-api.glitch.me')
      .post('/champion')
      .reply(201);
    supertest(index.server)
      .post('/champion')
      .send({
        name: 'Lucian',
        lane: 'ADC',
        power: '64',
        armor: '28',
        magicResist: '30',
        skillDif: 'N',
      })
      .expect(201)
      .end(done);
  });

  // it('Post Cait', (done) => {
  //   nock('https://mt-node-stock-api.glitch.me')
  //     .post('/champion')
  //     .reply(201);
  //   supertest(index.server)
  //     .post('/champion')
  //     .send({
  //       name: 'Caitlyn',
  //       lane: 'ADC',
  //       power: '62',
  //       armor: '28',
  //       magicResist: '30',
  //       skillDif: 'E',
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('Post Zed', (done) => {
  //   nock('https://mt-node-stock-api.glitch.me')
  //     .post('/champion')
  //     .reply(201);
  //   supertest(index.server)
  //     .post('/champion')
  //     .send({
  //       name: 'Zed',
  //       lane: 'MID',
  //       power: '63',
  //       armor: '32',
  //       magicResist: '32',
  //       skillDif: 'H',
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('Post Yasuo', (done) => {
  //   nock('https://mt-node-stock-api.glitch.me')
  //     .post('/champion')
  //     .reply(201);
  //   supertest(index.server)
  //     .post('/champion')
  //     .send({
  //       name: 'Yasuo',
  //       lane: 'MID',
  //       power: '60',
  //       armor: '30',
  //       magicResist: '32',
  //       skillDif: 'VH',
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('Post Nasus', (done) => {
  //   nock('https://mt-node-stock-api.glitch.me')
  //     .post('/champion')
  //     .reply(201);
  //   supertest(index.server)
  //     .post('/champion')
  //     .send({
  //       name: 'Nasus',
  //       lane: 'TOP',
  //       power: '67',
  //       armor: '34',
  //       magicResist: '32',
  //       skillDif: 'VE',
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('Post Tryndamere', (done) => {
  //   nock('https://mt-node-stock-api.glitch.me')
  //     .post('/champion')
  //     .reply(201);
  //   supertest(index.server)
  //     .post('/champion')
  //     .send({
  //       name: 'Tryndamere',
  //       lane: 'TOP',
  //       power: '72',
  //       armor: '33',
  //       magicResist: '32',
  //       skillDif: 'VE',
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('Post Lee Sin', (done) => {
  //   nock('https://mt-node-stock-api.glitch.me')
  //     .post('/champion')
  //     .reply(201);
  //   supertest(index.server)
  //     .post('/champion')
  //     .send({
  //       name: 'Lee Sin',
  //       lane: 'JG',
  //       power: '70',
  //       armor: '36',
  //       magicResist: '32',
  //       skillDif: 'VH',
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('Post Ivern', (done) => {
  //   nock('https://mt-node-stock-api.glitch.me')
  //     .post('/champion')
  //     .reply(201);
  //   supertest(index.server)
  //     .post('/champion')
  //     .send({
  //       name: 'Ivern',
  //       lane: 'JG',
  //       power: '50',
  //       armor: '27',
  //       magicResist: '32',
  //       skillDif: 'N',
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('Post Sona', (done) => {
  //   nock('https://mt-node-stock-api.glitch.me')
  //     .post('/champion')
  //     .reply(201);
  //   supertest(index.server)
  //     .post('/champion')
  //     .send({
  //       name: 'Sona',
  //       lane: 'SUP',
  //       power: '49',
  //       armor: '28',
  //       magicResist: '30',
  //       skillDif: 'E',
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  // it('Post Nami', (done) => {
  //   nock('https://mt-node-stock-api.glitch.me')
  //     .post('/champion')
  //     .reply(201);
  //   supertest(index.server)
  //     .post('/champion')
  //     .send({
  //       name: 'Nami',
  //       lane: 'SUP',
  //       power: '51',
  //       armor: '29',
  //       magicResist: '30',
  //       skillDif: 'E',
  //     })
  //     .expect(201)
  //     .end(done);
  // });

  it('Delete Lucian', (done) => {
    nock('https://mt-node-stock-api.glitch.me')
      .post('/champion')
      .reply(200);
    supertest(index.server)
      .delete('/champion/Lucian')
      .send()
      .expect(200)
      .end(done);
  });

  it('Get /champions', (done) => {
    supertest(index.server)
      .get('/champions')
      .expect(200)
      .end(done);
  });
});
