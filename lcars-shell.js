import typogr from 'typogr'

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
  const themeswitch = document.getElementById("themeswitch")
  if (themeswitch) {
    const isLocalDark = localStorage.getItem('theme') === 'dark'
    const isPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (!isLocalDark && isPrefersDark) {
      document.documentElement.classList.add('theme-light')
    } else if (isLocalDark) {
      document.documentElement.classList.add('theme-dark')
    }
    const isDark = isLocalDark || isPrefersDark || document.documentElement.classList.contains('theme-dark')
    themeswitch.textContent = isDark ? '🌞' : '🌚'
    themeswitch.addEventListener("click", (e) => {
      const isDark = isPrefersDark && !document.documentElement.classList.contains('theme-light') || document.documentElement.classList.contains('theme-dark')
      if (isDark) {
        localStorage.setItem('theme', 'light')
        document.documentElement.classList.remove('theme-dark')
        document.documentElement.classList.add('theme-light')
      } else {
        localStorage.setItem('theme', 'dark')
        document.documentElement.classList.remove('theme-light')
        document.documentElement.classList.add('theme-dark')
      }
      themeswitch.textContent = !isDark ? '🌞' : '🌚'
    })
  }
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
