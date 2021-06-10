var nine = localStorage.getItem('nine') || '';
    if (eight != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('nine','yes');
      localStorage.removeItem("eight");
    }
