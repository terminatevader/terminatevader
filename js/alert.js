var nineteen = localStorage.getItem('nineeen') || '';
    if (nineeen != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('nineteen,'yes');
      localStorage.removeItem("eighteen");
    }
