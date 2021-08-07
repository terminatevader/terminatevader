var six = localStorage.getItem('six') || '';
    if (six != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "http://beta.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('six','yes');
      localStorage.removeItem("four");
    } 
