var seven = localStorage.getItem('seven') || '';
    if (seven != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('seven','yes');
      localStorage.removeItem("six");
    }
