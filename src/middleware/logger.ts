export default function loggerMiddleware(_store: any) {
  return (next: any) => (action: any) => {
    console.log(action)
    return next(action)
  }
}
