var Events = calendarevents;
console.log(calendarevents);
Events.forEach((element) => {
  const formatter = new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  var datePL = new Date(element.date[0]);
  $("#listOfAllEvents").append(
    `<li><span>${element.name}</span> <br> ${formatter.format(datePL)}</li>`
  );
});
function Filter() {
  var input = document.getElementById("userInput");
  var ul = document.getElementById("listOfAllEvents");
  var li = ul.getElementsByTagName("li");
  var filter = input.value.toUpperCase();
  var eventNames = calendarevents[0].name;
  console.log(eventNames.toLowerCase());

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("span")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      console.log(txtValue.toUpperCase().indexOf(filter));
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
