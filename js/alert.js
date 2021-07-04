var three = localStorage.getItem('three') || '';
    if (three != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('three','yes');
      localStorage.removeItem("two");
    }
