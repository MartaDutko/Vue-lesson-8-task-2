export function generateYears() {
    const currentYear = new Date().getFullYear();
    const years = [];
    
    for (let i = currentYear; i >= 1990; i--) {
      years.push(i);
    }
  
    
    return years;
  }