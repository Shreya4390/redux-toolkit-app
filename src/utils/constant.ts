const options = ["--Level of Education--", "10th", "12th", "gradution", "post gradution"];

const InputFieldLengths = {
  minNameLength: 5,
  maxNameLength: 40,
};

const headers = [
  'Id',
  'Username',
  'Email',
  'Date of Birth',
  'Level of education',
  'Gender',
  'Profile',
  'Password'
];

const todayDate = new Date().toISOString().slice(0, 10);

export { options, InputFieldLengths, headers, todayDate };


