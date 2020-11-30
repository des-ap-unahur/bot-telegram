interface CommandInterface{
  message: string;
  command: string;
  response: (ctx:any) => {}
}

export default CommandInterface;