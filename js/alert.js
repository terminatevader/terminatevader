 var seventeen = localStorage.getItem('eighteen') || '';
    if (eighteen != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('eighteen','yes');
      localStorage.removeItem("seventeen");
    }
