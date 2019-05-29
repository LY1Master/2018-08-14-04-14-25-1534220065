module.exports = function main() {
var str = arguments[0];
var arr = [["._.","...","._.","._.","...","._.","._.","._.","._.","._."],["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"],["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]];
var res = "";
for(i=0;i<3;i++){
   var res1 = "";
   for(j=0;j<str.length;j++){
      var index = parseInt(str.charAt(j));
      res1 = res1 + arr[i][index]+" ";
   }
   res = res + res1 + "\n";
}
return res;
};