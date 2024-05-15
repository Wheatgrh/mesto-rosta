import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
type IGPTAnswer = {
  data: {
    choices: Array<{
      message: {
        content: string;
      };
    }>;
  };
};

@Injectable()
export class GptService {
  constructor(private readonly httpService: HttpService) {}

  async getRes(message: string) {
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
    };
    const res: IGPTAnswer = await firstValueFrom(
      this.httpService

        .post('https://api.proxyapi.ru/openai/v1/chat/completions', body, {
          headers: {
            Authorization: 'Bearer',
            'Content-Type': 'application/json',
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return res.data.choices[0].message.content;
  }
}
