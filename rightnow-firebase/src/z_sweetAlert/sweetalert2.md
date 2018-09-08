# How to use sweetAlert2

Check out https://sweetalert2.github.io/ for documentation on this dependency.

## Importing necessary files:
Import 2 files:
 
 `sweetalert2.css` from `rightnow-firebase/src/z_sweetAlert` *and* `swal` from `'sweetalert2/dist/sweetalert2.js'`

 Example:
```
import swal from 'sweetalert2/dist/sweetalert2.js';
import '../../z_sweetAlert/sweetalert2.css';
```

## Basic syntax:

Simple modal that displays error icon with messages:
```javascript
swal({
  type: 'error',
  title: 'Invalid Login!',
  text: 'You entered wrong email/password'
}).then(console.log('working success!!!!'));
```
You can have a `.then()` promise just like you would with axios or any promise-based functions.

Another application using `.then()` promise with same example above:
```javascript
swal({ // <-- you can use 
  type: 'error',
  title: 'Invalid Login!',
  text: 'You entered wrong email/password',

  onOpen: () => {
  // `SweetAlert` is a subclass of `Swal`
  //   with all the same instance & static methods
  swal.clickConfirm();
  }
})
.then(console.log('working success!!!!'));
```
`onOpen` condition will invoke `clickConfirm()` and close the modal immediately as it opens as a result.

Mote that you _cannot_ have two simulataneous instances of the modal. Invoking another modal will simply replace the previous one.