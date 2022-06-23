function initializeShell() {
  document.querySelectorAll('.content').forEach(function (element) {
    element.innerHTML = typogr.typogrify(element.innerHTML)
  })
  const co = document.getElementById("co")
  co.addEventListener("wheel", (ev) => {
    if (co.scrollWidth > co.clientWidth) {
      ev.preventDefault()
      co.scrollLeft += ev.deltaY
    }
  })
  co.classList.add('columnar')
  const scrolldir = document.getElementById("scrolldir")
  scrolldir.classList.add('vis')
  scrolldir.addEventListener("click", (e) => {
    if (co.classList.toggle('columnar')) {
      scrolldir.textContent = 'Scroll Horizontally ➡'
    } else {
      scrolldir.textContent = 'Scroll Vertically ⬇'
    }
  })
}

// `DOMContentLoaded` may fire before your script has a chance to run, so check before adding a listener
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", initializeShell);
} else {  // `DOMContentLoaded` already fired
  initializeShell();
}
