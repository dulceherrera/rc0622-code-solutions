function graduate(credential) {
  return function (fullName) {
    console.log(`${fullName}, ${credential}`);
    return fullName + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D');
const lawSchool = graduate('Esq.');

medicalSchool('Dulce Herrera');
lawSchool('Dulce Herrera');
