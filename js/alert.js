var fifeen = localStorage.getItem('fifteen') || '';
    if (fifteen != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('fifteen','yes');
      localStorage.removeItem("fourteen");
    }
