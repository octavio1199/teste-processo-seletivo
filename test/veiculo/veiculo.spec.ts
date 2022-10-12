
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';

import {start} from '../../src/index';
import supertest from 'supertest';
import assert from 'assert';


chai.use(chaiHttp);

describe('TESTES', async () => {
	const request = await supertest(start);

	it('should get all veiculos', (done) => {
		request.get('/veiculos')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});

});
