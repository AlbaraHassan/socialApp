export default () => ({
  SECRET: process.env.JWT_SECRET,
  SALT: process.env.HASH_SALT || 10,
});
