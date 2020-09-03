import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
  } from 'class-validator';
export class PostPoll {
    @Length(1, 2)
    poll_id: number;
    @Length(1, 2)
    poll_question_id: number;
    @Length(1, 2)
    poll_response_id: number;

}