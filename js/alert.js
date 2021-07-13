var twelve = localStorage.getItem('twelve') || '';
    if (twelve != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twelve','yes');
      localStorage.removeItem("eleven");
    }
