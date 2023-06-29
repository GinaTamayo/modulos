const email = 'usuario@dominio.com';

if (!email.includes('@') || email.indexOf('@') !== email.lastIndexOf('@')) {
  console.log('La dirección de correo electrónico no es válida.');
} else {
  const parts = email.split('@');
  if (parts[0].length === 0 || parts[1].length === 0) {
    console.log('La dirección de correo electrónico no es válida.');
  } else {
    const domain = parts[1];
    if (!domain.includes('.') || domain.lastIndexOf('.') <= domain.indexOf('@')) {
      console.log('La dirección de correo electrónico no es válida.');
    } else {
      console.log('La dirección de correo electrónico es válida.');
    }
  }
}
  