const request = require('supertest');
const app = require('../src/app');
const { add } = require('../src/utils');

describe('App Tests', () => {
    test('GET / should return message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello from GitHub Actions CI/CD Pipeline!');
    });

    test('GET /health should return OK', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('OK');
    });

    test('add function should work correctly', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });
});