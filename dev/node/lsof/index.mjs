import { lsof } from "list-open-files"
 
lsof( )
    .then( result => console.log( JSON.stringify(result, null, 2)  ) );

