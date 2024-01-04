import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Post } from "../models/post.model";

const JSON_PLACEHOLDER_ENDPOINT: string = "https://jsonplaceholder.typicode.com";

@Injectable()
export class PostService {
  private postUrl: string = `${JSON_PLACEHOLDER_ENDPOINT}/posts`;

  constructor(private http: HttpClient) {}

  getPosts(): Promise<Post[]> {
    return lastValueFrom(this.http.get<Post[]>(this.postUrl))
  }
}
