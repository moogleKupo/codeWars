function abbrevName(name){
  let letter2Index = name.indexOf(" ") + 1;
  let letter2 = name[letter2Index];
  let abname = name[0].toUpperCase() + '.' + letter2.toUpperCase();
return abname
}
abbrevName('John Doe');