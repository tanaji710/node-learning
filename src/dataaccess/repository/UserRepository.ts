import UserSchema = require("../schemas/userSchema");
import IUser = require("./../mongoose/User");

import RepositoryBase = require("./base/repository.base");

class UserRepository extends RepositoryBase<IUser> {

  constructor() {
    super(UserSchema);
  }

}

Object.seal(UserRepository);
export = UserRepository;
