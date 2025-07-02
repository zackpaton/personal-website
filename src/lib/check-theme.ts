export const checkTheme = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        var link = document.createElement('link');
        link.id = 'favicon';
        link.rel = 'icon';
        link.href = '/favicon-dark.ico';
        document.head.appendChild(link);
      } else {
        var link = document.createElement('link');
        link.id = 'favicon';
        link.rel = 'icon';
        link.href = '/favicon-light.ico';
        document.head.appendChild(link);
      }
    } catch (e) {}
  })();
`;
