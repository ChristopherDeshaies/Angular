


export class Hero  
{  
    id : number;
    name : string;
    addresses: Address[];
    constructor(id:any,name:any,addresses:any)
    {
      this.id = id as number;
      this.name = name as string;
      this.addresses = addresses as Address[];
    }
}

export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}

