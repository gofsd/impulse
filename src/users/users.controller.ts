import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import Users from './user.entity'
import { UsersService } from './users.service'

@Crud({
    model: {
      type: Users,
    }
  })
@Controller('users')
export class UsersController  implements CrudController<Users>{
    constructor(public service: UsersService){}
}
