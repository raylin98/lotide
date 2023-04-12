const assertEqual = require(`../assertEqual`);

const tail = require(`../tail.js`);

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words);
assertEqual(words.length, 3);
/*tests*/
assertEqual(words.length, 2);
assertEqual(words[0], "Yo Yo");
assertEqual(words[0], "Labs");
assertEqual(words[2],"Lighthouse")