let url = "https://www.linkedin.com/in/jatin_kapadia_007";

function match(url) {
  const regex =
    /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

  let result = regex.test(url);
  console.log(result);
}

match(url);
