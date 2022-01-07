const loginForm = $("#login-form");
const signupForm = $("#signup-form");
const logoutBtn = $("#logout-btn");

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#email-input").val();
  const password = $("#password-input").val();

  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace("/dashboard");
  }
};

const handleSignUp = async (event) => {
  event.preventDefault();

  const user_name = $("#username-input").val();
  const email = $("#email-input").val();
  const password = $("#password-input").val();
  const first_name = $("#first-name").val();
  const last_name = $("#last-name").val();

  const response = await fetch("/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_name,
      email,
      password,
      first_name,
      last_name,
    }),
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace("/login");
  }
};

const handleLogout = async () => {
  const response = await fetch("/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace("/");
  }
};

const container = $("#container");

const handleClick = async function (event) {
  const target = event.target;
  const blogId = `blogs/${target.id}`;

  window.location.replace(blogId);
};

const onReady = function () {
  container.on("click", handleClick);
};

$(document).ready(onReady);

loginForm.on("submit", handleLogin);
signupForm.on("submit", handleSignUp);
logoutBtn.on("click", handleLogout);
