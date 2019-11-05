import { PostRepository }from '../../domain/post/PostRepository';
import { CreatePostParamsDto }from '../../domain/post/CreatePostParamsDto';
import { CreatePostResult }from '../../domain/post/CreatePostResult';
import { PostInfos }from '../../domain/post/PostInfos';
import { ApiClient }from '../httpAdapters/ApiClient';
import { CreateLoginApplication }from '../../create/CreateLoginApplication';
import { SearchPostParamsDto }from '../../domain/post/SearchPostParamsDto';
import { UnauthorizedErrorHook }from '../UnauthorizedErrorHook';

export class PostRepositoryImpl implements PostRepository {
  public Save(createPostParams: CreatePostParamsDto): Promise<CreatePostResult> {
    const jwt = CreateLoginApplication().GetJwt();
    return new ApiClient(jwt).CreatePost(createPostParams).catch(UnauthorizedErrorHook);
  }

  public TakeLatest(searchPostParams:SearchPostParamsDto): Promise<PostInfos[]> {
    const jwt = CreateLoginApplication().GetJwt();
    return new ApiClient(jwt).TakeLatestPosts(searchPostParams).catch(UnauthorizedErrorHook);
  }
}
