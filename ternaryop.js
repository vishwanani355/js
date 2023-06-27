


function getFee(isMember) {
    return (isMember ? '22.00' : '710.00');
  }
  
  console.log(getFee(true));
  // Expected output: "22.00"
  
  console.log(getFee(false));
  // Expected output: "710.00"
  
  console.log(getFee(null));
  // Expected output: "710.00"
  