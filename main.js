(async () => {
  const $$ = (selector) => document.querySelectorAll(selector);
  const $$accordionItems = $$("dl.accordion dt");

  const accordionCloseExpanded = () => {
    $$accordionItems.forEach(($item) => {
      const $btn = $item.querySelector("button");
      const $dd = $item.nextElementSibling;

      $btn.setAttribute("aria-expanded", "false");
      $dd.classList.remove("open");
      $dd.hidden = false;
    });
  };

  accordionCloseExpanded();

  $$accordionItems.forEach(($dt) => {
    const $btn = $dt.querySelector("button");
    const $dd = $dt.nextElementSibling;

    $dt.addEventListener("click", (evt) => {
      evt.preventDefault();

      $btn.click();
    });

    $btn.addEventListener("click", (evt) => {
      evt.preventDefault(); // Prevent default behavior (e.g. if it’s in a form)
      evt.stopPropagation(); // 🔥 Stop the event from bubbling up

      const isExpanded = $btn.getAttribute("aria-expanded") === "true";

      accordionCloseExpanded();

      if (!isExpanded) {
        $btn.setAttribute("aria-expanded", "true");
        $dd.classList.add("open");
        // $dd.hidden = false;
      }
    });
  });
})();
