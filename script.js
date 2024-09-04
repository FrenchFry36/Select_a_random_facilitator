var names;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


names = [];


document.getElementById('add_name').addEventListener('click', (event) => {
  names.push(document.getElementById('name_input').value);
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = document.getElementById('name_input').value;

  element_list.appendChild(new_li);

});

document.getElementById('select_facilitator').addEventListener('click', (event) => {
  let element_facilitator_name = document.getElementById('facilitator_name');
  element_facilitator_name.innerText = randomMember(names);

});