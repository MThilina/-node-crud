const request = require('supertest');
const app = require('../index');  // Your Express app
const mongoose = require('mongoose');

// Example mock user data
const mockUser = {
  id: '12345',
  firstname: 'John',
  lastname: 'Doe',
  passportno: 'NPM-00001'
};

// Before all tests, connect to the test database
beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/node-crud-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

// Clear the database after each test
afterEach(async () => {
  await mongoose.connection.collection('users').deleteMany({});
});

// After all tests, disconnect from the database
afterAll(async () => {
  await mongoose.disconnect();
});

describe('CRUD Operations for Users', () => {

  // Test for creating a user
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send(mockUser)
      .expect(201);  // Check that status code is 201 (Created)

    // Check response
    expect(response.body.message).toBe('User Created');
    expect(response.body.data).toMatchObject(mockUser);
  });

  // Test for retrieving all users
  it('should retrieve all users', async () => {
    // First, insert a user into the database
    await request(app)
      .post('/api/users')
      .send(mockUser)
      .expect(201);

    // Fetch all users
    const response = await request(app)
      .get('/api/users')
      .expect(200);

    expect(response.body.message).toBe('Users Found');
    expect(response.body.data.length).toBe(1);
    expect(response.body.data[0]).toMatchObject(mockUser);
  });

  // Test for retrieving a single user by ID
  it('should retrieve a user by ID', async () => {
    // First, create a user
    await request(app)
      .post('/api/users')
      .send(mockUser)
      .expect(201);

    // Fetch the user by ID
    const response = await request(app)
      .get(`/api/users/${mockUser.id}`)
      .expect(200);

    expect(response.body.message).toBe('User Found');
    expect(response.body.data).toMatchObject(mockUser);
  });

  // Test for updating a user
  it('should update a user by ID', async () => {
    // First, create a user
    await request(app)
      .post('/api/users')
      .send(mockUser)
      .expect(201);

    // Update the user's firstname
    const updatedUser = { firstname: 'Jane' };
    const response = await request(app)
      .put(`/api/users/${mockUser.id}`)
      .send(updatedUser)
      .expect(200);

    expect(response.body.message).toBe('User Updated');
    expect(response.body.data.firstname).toBe('Jane');
  });

  // Test for deleting a user by ID
  it('should delete a user by ID', async () => {
    // First, create a user
    await request(app)
      .post('/api/users')
      .send(mockUser)
      .expect(201);

    // Delete the user
    const response = await request(app)
      .delete(`/api/users/${mockUser.id}`)
      .expect(200);

    expect(response.body.message).toBe('User Deleted');
  });
});
