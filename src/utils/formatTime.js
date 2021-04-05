function zeroPadding(num){
  return num < 10 ? '0' + num : num;
}

export const formatTime = (seconds) => {
  if(!seconds 
    || 
    typeof seconds === 'string'
    ||
    typeof seconds === 'function'
    ||
    seconds < 0){
    return null;
  }else{
    let hours = Math.floor(seconds / (60 * 60));
    let minutes = Math.floor((seconds - hours * 60 * 60) / 60);
    let secnds = (seconds - hours * 60 * 60 - minutes * 60);   

    return zeroPadding(hours) + ':' + zeroPadding(minutes) + ':' + zeroPadding(secnds); 
  }
};