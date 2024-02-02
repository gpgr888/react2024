
//explore import and export
// if we need something from util.js we need to import it, multiple variables can be inside {} braces to import and typically relative path
// in react though extension is not needed
//for multiple named imports we can use either below method inside braces or 

  // import { apikey, multile } from "./util.js";


//you can also use alias if you want to change the name of variable with as keyword like below

// import {apikey as key, multiple} from "./util.js";

//or below method where all the vairable of util.js are groupded inside util variable and we use . operator to access those variables
import * as util from "./util.js";

//for default import we dont need braces

import apikey2 from "./util.js";


//for multipel imports which are named exports with vairable,


console.log(util.apikey);
console.log(apikey2);
console.log(util.multile);

// if we run this code then we error "Cannot use import statement outside a module" this is because we have not put type="module" in our html file where
//we have called this file in script tag so if we have to use import and export we have to use type="module" in script tag 