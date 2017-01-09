function palindrome(str) {
    // Good luck!
    str = str.replace(/[\s,.]/, '');
    str = str.toLowerCase();
    
    console.log('Considering ' + str);
  if(str.length == 1 || str.length === 0) {
    ret = true;
  } else if (str.length == 2) {
    if (str[0] == str[1]) {
      ret = true;
    } else {
      ret = false;
    }
  } else {
      
    ret = (str[0] == str[str.length-1]) && (palindrome(str.slice(1, -1)));
  }
  return ret;
}



console.log(palindrome("pOoP..."));
