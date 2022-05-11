//table
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
let html = "<table>";
let content = tableInfo.tableContent;
let header = tableInfo.tableHeader;
html += "<tr>";
for (let i = 0; i < header.length; i++) {
  html += "<th>" + header[i] + "</th>";
}
html += "</tr>";
for (let j = 0; j < content.length; j++) {
  html += "<tr>";
  html += "<td>" + content[j]["Student Name"] + "</td>";
  html += "<td>" + content[j].Age + "</td>";
  html += "<td>" + content[j].Phone + "</td>";
  html += "<td>" + content[j].Address + "</td>";

  html += "</tr>";
}
html += "</table>";
document.getElementById("studentTable").innerHTML = html;

//list
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
//order list
const orderList = document.getElementById("orderList");
const ol = document.createElement("ol");
for (let i = 0; i < list.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = list[i];
  ol.appendChild(li);
}
orderList.appendChild(ol);

//unorder list
const unorderList = document.getElementById("unorderList");
const ul = document.createElement("ul");
for (i = 0; i < list.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = list[i];
  ul.appendChild(li);
}
unorderList.appendChild(ul);

//dropdown list
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
const dropList = document.getElementById("dropList");
const select = document.createElement("select");

for (let i = 0; i < dropDownList.length; i++) {
  var opt = dropDownList[i].content;
  var option = document.createElement("option");
  option.textContent = opt;
  option.value = opt;
  select.appendChild(option);
}
dropList.appendChild(select);
