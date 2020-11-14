import UserFacade from '../src/facades/user';
import { expect, assert } from "chai";
import { ApiError } from '../src/errors/apiError';
import { bryptAsync, bryptCheckAsync } from '../src/utils/bcrypt-async-helper'
import IGameUser from '../src/interfaces/GameUser'
// import { assert } from 'console';

describe("Verify the UserFacade", () => {

  beforeEach(async () => {
     const hash: string = await bryptAsync("secret");
    UserFacade.users = [
      { name: "Peter Pan", userName: "pp@b.dk", password: hash, role: "user" },
      { name: "Donald Duck", userName: "dd@b.dk", password: hash, role: "user" },
      { name: "admin", userName: "admin@a.dk", password: hash, role: "admin" }
    ]
  })

})


it("Should Add the user Kurt", async () => {
  const newUser = { name: "Jan Olsen", userName: "jo@b.dk", password: "secret", role: "user" }
  try {
    const status = await UserFacade.addUser(newUser);
    const jan = await UserFacade.getUser("jo@b.dk");
    const passwordOK = await bryptCheckAsync("secret", jan.password);
    expect(status).to.be.equal("User was added")
    expect(UserFacade.users.length).to.equal(4)
  } catch (err) {
    expect.fail("Seems like password was not hashed correctly")
  } finally { }
})
it("Should remove the user Peter", async () => {
    const userName = "pp@b.dk";
    try {
      const status = await UserFacade.deleteUser(userName);
      expect(status).to.be.equal('User was deleted');
    } catch (err) {
     expect.fail('Something went wrong')
    } finally { }
  })

it("Should get three users", async () => {
  expect(UserFacade.users.length).to.equal(3);
 })
 
it("Should find Donald Duck", async () => {
  const userName = 'dd@b.dk';
  try{
    const user = await UserFacade.getUser(userName);
    expect(user.name).to.equal('Donald Duck')
  } catch (err) {

  }finally {}
})
it("Should not find xxx.@.b.dk", async () => {
  let error;
  const userName = 'xx.@.b.dk';
  try {
    const result = await UserFacade.getUser(userName);
    throw new Error(`Expected an error and didn't get one!`)
  } catch(err) {
    error = err;
  } 
  const expected = 'User Not Found'
  assert.equal(error.message, expected);
 })
