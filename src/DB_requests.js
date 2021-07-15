// add list to db
export async function DB_AddList(items, listName) {
  try {
    const body = JSON.stringify({ name: listName, items });
    const storage = await JSON.parse(localStorage.getItem('state'));
    const bearer = 'Bearer ' + storage.user.token;
    const data = await fetch('/lists/save', {
      method: 'POST',
      body,
      headers: {
        "Authorization": bearer,
        "Content-type": "application/json",
      },
    });
    const json = await data.json();
    return json;
  } catch (error) {
    console.error('Error:', error);
  }
}
// edit list
export async function DB_EditList(items, id) {

  try {
    const body = JSON.stringify({ items, id });
    const data = await fetch('/lists/edit', {
      method: 'POST',
      body,
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = data.json();
    return json;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// delete list
export async function DB_DeleteList(id) {

  try {
    const body = JSON.stringify({ id });
    await fetch('/lists/delete', {
      method: 'POST',
      body,
      headers: {
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// display user lists
export async function DB_DisplayList() {
  try {
    const storage = await JSON.parse(localStorage.getItem('state'));
    const bearer = 'Bearer ' + storage.user.token;
    const data = await fetch('/lists', {
      method: 'GET',
      headers: {
        "Authorization": bearer,
        "Content-type": "application/json",
      },
    });
    const json = await data.json();
    return json;
  } catch (error) {
    console.error('Error:', error);
  }
}
// export function DB_Register(data) {
//   if (data.password === data.repeatPassword) {
//     fetch('/users', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-type': 'application/json',
//         'Accept': 'application/json',
//       },
//     })
//       .then(response => response.json())
//       .then(json => {
//         console.log('Success:', json);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }
// }