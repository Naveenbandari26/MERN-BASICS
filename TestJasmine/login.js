const users = {
    admin: "1234",
    guest: "guest123",
    testuser: "test123"
  };
  
  function login(username, password) {
    if (!username || !password) {
      return { success: false, message: "Username and password are required" };
    }
  
    if (users[username] && users[username] === password) {
      return { success: true, token: `mock-token-for-${username}` };
    }
  
    return { success: false, message: "Invalid credentials" };
  }
  
module.exports = login;
  