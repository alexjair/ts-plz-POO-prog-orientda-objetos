export interface Driver {
  database: string;
  password: string;
  port: number;
  port_protected?: number;

  funDisConnect(): void;
  funIsConnect(): void;
  funConnect(): void;
}

//TIPO DATO
const driver: Driver = {
  database: 'postgres',
  password: '12345',
  port: 23,
  funDisConnect: function (): void {
    throw new Error("Function not implemented.");
  },
  funIsConnect: function (): void {
    throw new Error("Function not implemented.");
  },
  funConnect: function (): void {
    throw new Error("Function not implemented.");
  }
}


//IMPLEMENT
class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private port_default: number,
  ){

  }
  funDisConnect(): void {
    throw new Error("Method not implemented.");
  }
  funIsConnect(): void {
    throw new Error("Method not implemented.");
  }

  funConnect(): void {

  }

}
