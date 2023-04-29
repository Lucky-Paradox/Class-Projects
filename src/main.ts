const setAge = () => {
  const birthday = "MTk5My0xMC0yOQ==";
  const ageEl = document.getElementById("age");

  if (!ageEl) return;

  const birthDate = new Date(atob(birthday));
  const diffMs = Date.now() - birthDate.getTime();
  const diffDate = new Date(diffMs);

  ageEl.innerText = Math.abs(diffDate.getUTCFullYear() - 1970).toString();
};

const onLoad = () => {
  setAge();

  document.querySelectorAll<HTMLAnchorElement>("li a").forEach((el) => {
    el.addEventListener("click", () => {
      try {
        // @ts-expect-error
        window.gtag("event", "click", {
          link: el.title,
        });
      } catch {}
    });
  });
};

if (/complete|interactive|loaded/.test(document.readyState)) {
  onLoad();
} else {
  document.addEventListener("DOMContentLoaded", onLoad, false);
}
