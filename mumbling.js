function accum(s) {
  let i;
    let result = "";
  for (i = 0; i < s.length; i++){
    result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
     if (i < s.length - 1){
      result += "-";
    }
  }
      return result;
  }