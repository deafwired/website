const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("DarkMode="))
  ?.split("=")[1];
if (cookieValue === undefined) {
  document.cookie = "DarkMode=True; SameSite=Lax; Secure";
  document.getElementById("body").className = "dark-body";
} else if (cookieValue === "True") {
  document.getElementById("body").className = "dark-body";
} else {
  document.getElementById("body").className = "light-body";
}

function toggleDarkMode() {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("DarkMode="))
    ?.split("=")[1];
  if (cookieValue === "True") {
    document.cookie = "DarkMode=False; SameSite=Lax; Secure";
    document.getElementById("body").className = "light-body";
  } else {
    document.cookie = "DarkMode=True; SameSite=Lax; Secure";
    document.getElementById("body").className = "dark-body";
  }
}
