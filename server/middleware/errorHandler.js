export default function errorHandler(err, req, res, next) {
  const bad = err.name === "ValidationError" || err.name === "CastError";
  res.status(bad ? 400 : err.status || 500).json({ message: err.message });
}
