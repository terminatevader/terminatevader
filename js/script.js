var four = localStorage.getItem('four') || '';
    if (four != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "http://beta.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('four','yes');
      localStorage.removeItem("one");
    } 
