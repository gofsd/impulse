import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import process from 'process'

const testUserId = process?.env?.DEFAULT_USER_ID || 2;

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('')
      .expect(200)
  });
  
  it('/orders/often-delivered/:userId (GET)', () => {
    return request(app.getHttpServer())
      .get(`/orders/often-delivered/${testUserId}`)
      .expect(200)
      .expect({ count: '3', address: 'Kiev, Zhmerinskaya 10-54' })
  });

  it('/orders/orders-count/:userId (GET)', () => {
    return request(app.getHttpServer())
      .get(`/orders/orders-count/${testUserId}`)
      .expect(200)
      .expect({ count: '4' })
  });

  it('/orders/avg-exec-time/:userId (GET)', () => {
    return request(app.getHttpServer())
      .get(`/orders/avg-exec-time/${testUserId}`)
      .expect(200)
      .expect({ avg: '33750.000000000000' })
  });

  it('/orders/total-orders-price/:userId (GET)', () => {
    return request(app.getHttpServer())
      .get(`/orders/total-orders-price/${testUserId}`)
      .expect(200)
      .expect({ sum: '70' });
  });
});
