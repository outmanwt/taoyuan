declare const __APP_VERSION__: string

declare module '*/package.json' {
  const pkg: {
    name: string
    title: string
    qq: string
    version: string
    description: string
    author: string
    [key: string]: unknown
  }
  export default pkg
}
