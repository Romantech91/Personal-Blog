const getTheme = () => {
    return localStorage.getItem('theme') || 'light';
  };
  
  const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
  };
  
  const applyTheme = (theme) => {
    document.body.className = theme; 
  };
  
  const toggleTheme = () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
    applyTheme(newTheme);
    setTheme(newTheme);
  };
  
  const savedTheme = getTheme();
  applyTheme(savedTheme);
  
  const toggleButton = document.getElementById('toggle');
  toggleButton.addEventListener('click', toggleTheme);
  