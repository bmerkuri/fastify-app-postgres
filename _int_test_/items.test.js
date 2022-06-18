const setupTestEnv = require('./setupTestEnv')

const app = setupTestEnv();

describe('Integrated tests for crud operations connected to test postgres Db', () => {
    test('Should get all items', async () => {
      const response = await app.inject({
        method: 'GET',
        url: '/v2',
      });
  
      expect(response.statusCode).toBe(200);
      expect(response.json()).toMatchObject([
        {
          description: 'This is a test item',
          name: 'Test item',
        },
      ]);
    });
  
    test('Should get a single item', async () => {
      const response = await app.inject({
        method: 'GET',
        url: '/v2/2',
      });
  
      expect(response.statusCode).toBe(200);
      expect(response.json()).toMatchObject([
        {
          description: 'This is a test item',
          name: 'Test item',
        },
      ]);
    });
  
    test('Should create a item via POST route', async () => {
      const item = {
        name: 'Test item 2',
        description: 'This is a test item',
      };
  
      const response = await app.inject({
        method: 'POST',
        url: '/v2',
        payload: item,
      });
  
      expect(response.statusCode).toBe(201);
      expect(response.json()).toMatchObject(item);
    });
  
    test('Should update a item', async () => {
      const item = {
        name: 'Updated item',
        description: 'Updated item',
      };
  
      const response = await app.inject({
        method: 'PUT',
        url: '/v2/2',
        payload: item,
      });
  
      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual(objectContaining(item));
    });
  
    test('Should delete a item', async () => {
      const response = await app.inject({
        method: 'DELETE',
        url: '/v2/2',
      });
  
      expect(response.statusCode).toBe(200);
      expect(response).toMatchObject({
        body: 'Item with id: 2 has been deleted',
      });
    });
  });