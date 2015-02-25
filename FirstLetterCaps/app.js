/**
 * Created by williambjohnson on 2/24/15.
 */
var capitalize;
capitalize = function (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
var myString = 'hello world';
capitalize(myString);
//returns 'Hello World'//

