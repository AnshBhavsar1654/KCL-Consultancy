
export const scrollToSection = (hash: string) => {
  if (hash) {
    // Remove the leading # if present
    const id = hash.startsWith('#') ? hash.substring(1) : hash;
    const element = document.getElementById(id);
    
    if (element) {
      // Use smooth scrolling with a slight delay to ensure proper rendering
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
      return true;
    }
  }
  return false;
};
