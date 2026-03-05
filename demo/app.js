const countries = [
  "Bolivia",
  "Argentina",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Mexico",
  "Peru",
  "Spain",
  "USA",
];

const $ = (id) => document.getElementById(id);

const select = $("country");
const filter = $("filter");
const output = $("output");
const btnLog = $("btn-log");
const btnTheme = $("btn-theme");

function renderOptions(list) {
  select.innerHTML = "";
  for (const item of list) {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = item;
    select.appendChild(opt);
  }
}

function getSelection() {
  return Array.from(select.selectedOptions).map((o) => o.value);
}

renderOptions(countries);

filter.addEventListener("input", () => {
  const q = filter.value.trim().toLowerCase();
  const filtered = q
    ? countries.filter((c) => c.toLowerCase().includes(q))
    : countries;
  renderOptions(filtered);
  output.textContent = `Filter: "${filter.value}"\nOptions shown: ${filtered.length}`;
});

btnLog.addEventListener("click", () => {
  output.textContent = `Selected:\n- ${getSelection().join("\n- ") || "(none)"}`;
});

btnTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  output.textContent = `Theme: ${document.documentElement.classList.contains("light") ? "light" : "dark"}`;
});
