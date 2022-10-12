function palindrome_test(str)
{

  let z = str.length - 1;

  for(i = 0; i < str.length/2; i++)
  {
    let x = str[i];
    let y = str[z];
    if(x == y)
    {
      return true;
    }
  return false;
  }


}

function output(str)
{
  let answer = palindrome_test(str);

  if(answer == true)
  {
    console.log(string + "is a palindrome.");
  }
  else
  {
    console.log(string + "is not a palindrome.");
  }

}

const string = prompt("Enter a string: ");
output(string);
