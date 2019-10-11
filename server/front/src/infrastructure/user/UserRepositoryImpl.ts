import { UserRepository }from '../../domain/user/UserRepository';
import { MakeUserResult }from '../../domain/user/MakeUserResult';
import { MakeUserDto }from '../../domain/user/UserDto';
import { UserId }from '~/src/domain/user/UserId';
import { ApiClient }from '../httpAdapters/ApiClient';

//UserRepositoryの実装
export class UserRepositoryimpl implements UserRepository {
  public GetMyUserId(): Promise<UserId> {
    return Promise.resolve({ id: 1 });
  }
  public async MakeUser(makeUserDto: MakeUserDto): Promise<MakeUserResult> {
    const apiClient = new ApiClient();
    return await apiClient.CreateUser({
      name: makeUserDto.name,
      sex: makeUserDto.sex,
      jwt: 'aaaa',
    });
  }
}
