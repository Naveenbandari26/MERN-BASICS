const fs = require('fs');
const path = require('path');
const login = require('../../login');

const validUsers = {
  admin: "1234",
  guest: "guest123",
  testuser: "test123"
};

describe("Login Function with Users from data.txt", () => {
  const filePath = path.join(__dirname, '../../data.txt');

  const lines = fs.readFileSync(filePath, 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line);

  lines.forEach(line => {
    const [username = '', password = ''] = line.split(',').map(part => part.trim());
    const expectedPassword = validUsers[username];
    const isValid = expectedPassword === password;

    it(`should ${isValid ? 'succeed' : 'fail'} for user: ${username}`, () => {
      const result = login(username, password);

      if (isValid) {
        expect(result.success).toBeTrue();
        expect(result.token).toBe(`mock-token-for-${username}`);
        console.log(`✅ SUCCESS: Login succeeded for user "${username}"`);
      } else {
        expect(result.success).toBeFalse();
        console.log(`❌ FAILURE: Login failed for user "${username}"`);
      }
    });
  });
});
