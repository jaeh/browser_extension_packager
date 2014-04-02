// Saves ScreenInvader options to localStorage. sanitizes input.
function save_options() {
  var returnString = "Settings saved."

  // Update status to let user know options were saved.
    , status = document.getElementById("status")

  // saving the ip/url
    , textToAlert = document.getElementById("text").value;

  if( !textToAlert || textToAlert === '' ) {
      textToAlert = "hello chromium";
  }

  localStorage.textToAlert = textToAlert;

  status.innerHTML = returnString;
  setTimeout(function() {
    status.innerHTML = "";
  }, 5000);
}


// Restores select box state to saved value from localStorage.
function restore_ip() {
  var ip = localStorage.ip;

  if (!ip) {
    localStorage.ip = '10.20.30.51';
    ip = '10.20.30.51';
    return;
  }
  
  document.getElementById('ip').value = ip;
}


// Restores select box state to saved value from localStorage.
function restore_switchToTabOnLoad() {
  var switchToTabOnLoad = localStorage.switchToTabOnLoad;

  if ( switchToTabOnLoad === 'false' ) {
    switchToTabOnLoad = false;
  } else {
    switchToTabOnLoad = true;
  }
  //~ console.log(switchToTabOnLoad);

  document.getElementById('switchToTabOnLoad').checked = switchToTabOnLoad;
}


document.getElementById('ip').onload = restore_ip();
document.getElementById('switchToTabOnLoad').onload = restore_switchToTabOnLoad();

document.getElementById('save').addEventListener('click', save_options);
