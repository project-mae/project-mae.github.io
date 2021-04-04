function changeActive(id, arr) {
    document.getElementById(id).className = "nav-link active"
    for (i=0;i<arr.length;i++) {
      document.getElementById(arr[i]).className = "nav-link"
    }
  }