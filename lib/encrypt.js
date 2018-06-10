const bcrypt = require('bcrypt');

export const encrypt = async (data) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(data, salt);

    return hash;
  } catch (err) {
    console.error(`Failed to encrypt data: ${data}`, err);
  }
}
