let users = ["admin", "Aliyan", "Shehzad", "Karim", "Anas"];

let greet = users.map((user) => {
  if (user == "admin") {
    console.log("Hello Admin ? Would you like to see some status report");
  } else if (user == "Aliyan") {
    console.log("Hellow " + user + " thank you for logging in again");
  } else if (user == "Shehzad") {
    console.log("Hellow " + user + " thank you for logging in again");
  } else if (user == "Shehzad") {
    console.log("Hellow " + user + " thank you for logging in again");
  } else if (user == "Karim") {
    console.log("Hellow " + user + " thank you for logging in again");
  } else if (user == "Anas") {
    console.log("Hellow " + user + " thank you for logging in again");
  } else {
    console.log("we need to find some users");
  }
});
