import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    headers: { "content-type": "text/html;charset=utf8" },
    body: JSON.stringify(sample()),
  };
}

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

class Result {
  user: Student;
  message: string;
  constructor(u: Student, m: string){
    this.message = m;
    this.user = u;
  }
}


const sample = () => {
  let s = new Student("Jane", "M.", "User");
  let r = new Result(s, `Welcome to deno ${Deno.version.deno} 🦕`);

  return r;
}