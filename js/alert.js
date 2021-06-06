var five = localStorage.getItem('five') || '';
    if (five != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('five','yes');
      localStorage.removeItem("four");
    }
